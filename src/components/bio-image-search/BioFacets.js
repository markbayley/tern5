import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { selectedFilterAction, fetchFacetsAction } from "../../store/reducer";
import { startCase, isEmpty } from "lodash";

const BioFacets = () => {
  const facets = useSelector((state) => state.search.facets);
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.search.selectedFilter);
  const [selectedSites, setSelectedSites] = useState(null);
  const [selectedPlots, setSelectedPlots] = useState(null);
  const [storedSiteOptions, setStoredSiteOptions] = useState([]);

  console.log("filters=", facets);

  const getOptionsSites = () => {
    const options = facets["site_id"]["buckets"].map((item) => {
      const count = item.doc_count;
      const value = item.key;
      const label = item["hits"]["hits"]["hits"][0]["_source"]["site_id"].label;
      return { label: label + "(" + count + ")", value: value };
    });
    return options;
  };

  const getOptionsPlots = () => {
    const options = facets["plot"]["buckets"].map((item) => {
      const count = item.doc_count;
      const value = item.key;
      const label = item["hits"]["hits"]["hits"][0]["_source"]["plot"].label;
      return { label: label + "(" + count + ")", value: value };
    });
    return options;
  };

  const getOptionsSiteVisitId = () => {
    const options = facets["site_visit_id"]["buckets"].map((item) => {
      const count = item.doc_count;
      const value = item.key;
      const label = item.key;
      return { label: label + "(" + count + ")", value: value };
    });
    return options;
  };

  const getOptionsImageType = () => {
    const arrOptions = [];
    facets["image_type"]["buckets"].map((item) => {
      const count = item.doc_count;
      const value = item.key;
      const label =
        item["hits"]["hits"]["hits"][0]["_source"]["image_type"].label;
      if (value === "ancillary") {
        item["image_type_sub"]["buckets"].map((sub_type) => {
          const subCount = sub_type.doc_count;
          const subValue = sub_type.key.replace(/%20/gi, " ");
          const subLabel =
            label + "[" + startCase(sub_type.key.replace(/%20/gi, " ")) + "]";
          arrOptions.push({
            label: subLabel + "(" + subCount + ")",
            value: subValue,
          });
        });
      } else {
        arrOptions.push({ label: label + "(" + count + ")", value: value });
      }
    });
    return arrOptions;
  };

  let optionsSites = [];
  let optionsPlots = [];
  let optionsSiteVisitId = [];
  let optionsImageTypes = [];
  // const optionsDateRange = [];
  if (!isEmpty(facets)) {
    if (storedSiteOptions.length === 0) {
      optionsSites = getOptionsSites();
      setStoredSiteOptions(optionsSites);
    } else {
      optionsSites = storedSiteOptions;
    }
    optionsPlots = getOptionsPlots();
    optionsSiteVisitId = getOptionsSiteVisitId();
    optionsImageTypes = getOptionsImageType();
  }

  useEffect(() => {
    console.log("In useEffect of Facets");
    let sites = {};
    if (selectedSites !== null) {
      sites = { ...sites, site_id: selectedSites };
    }
    console.log("sites=", sites);
    dispatch(fetchFacetsAction(sites));
  }, [selectedSites]);

  const siteSelect = (siteOptions) => {
    console.log("e=", siteOptions);
    let searchParam = {};
    if (siteOptions !== null) {
      const selected = siteOptions.map((option) => option.value);
      if (selected.length !== 0) {
        searchParam = { ...searchParam, site_id: selected.join() };
        setSelectedSites(selected.join());
      } else {
        setSelectedSites(null);
      }
    } else {
      setSelectedSites(null);
    }

    if (selectedPlots !== null) {
      searchParam = { ...searchParam, plot: selectedPlots };
    }
    console.log("searchParam = ", searchParam);
    dispatch(selectedFilterAction(searchParam));
    // dispatch(fetchFacetsAction(searchParam));
  };

  const plotSelect = (plotOptions) => {
    console.log("e=", plotOptions);
    let searchParam = {};
    if (plotOptions !== null) {
      const selected = plotOptions.map((option) => option.value);
      if (selected.length !== 0) {
        searchParam = { ...searchParam, plot: selected.join() };
        setSelectedPlots(selected.join());
      } else {
        setSelectedPlots(null);
      }
    } else {
      setSelectedPlots(null);
    }

    if (selectedSites !== null) {
      searchParam = { ...searchParam, site_id: selectedSites };
    }
    console.log("searchParam = ", searchParam);
    dispatch(selectedFilterAction(searchParam));
    // dispatch(fetchFacetsAction(searchParam));
  };

  return (
    <div>
      <Select
        className="mb-4"
        isMulti
        options={optionsSites}
        placeholder="Select Sites"
        isSearchable
        autoFocus
        onChange={(e) => siteSelect(e)}
      />
      <Select
        className="mb-4"
        isMulti
        options={optionsPlots}
        placeholder="Select Plots"
        isSearchable
        onChange={(e) => plotSelect(e)}
      />
      <Select
        className="mb-4"
        isMulti
        options={optionsSiteVisitId}
        placeholder="Select Site Visit Ids"
        isSearchable
      />
      <Select
        className="mb-4"
        isMulti
        options={optionsImageTypes}
        placeholder="Select Image Types"
        isSearchable
      />
    </div>
  );
};
export default BioFacets;

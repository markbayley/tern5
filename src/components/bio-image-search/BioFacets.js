/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { startCase, isEmpty } from "lodash";
import chroma from "chroma-js";
import { selectedFilterAction, fetchFacetsAction } from "../../store/reducer";

let storedSiteOptions = [];
let storedPlotOptions = [];
let storedSiteVisitIds = [];
let storedImageTypes = [];

const BioFacets = () => {
  const facets = useSelector((state) => state.search.facets);
  const dispatch = useDispatch();
  const [selectedSites, setSelectedSites] = useState(null);
  const [selectedPlots, setSelectedPlots] = useState(null);
  const [selectedVisitIds, setSelectedVisitIds] = useState(null);
  const [selectedImageTypes, setSelectedImageTypes] = useState(null);
  const [selectedImageTypeSubs, setSelectedImageTypeSubs] = useState(null);

  useEffect(() => {
    dispatch(fetchFacetsAction({}));
  }, [dispatch]);

  const getOptionsSites = () => {
    const options = facets["site_id"].buckets.map((item) => {
      const count = item.doc_count;
      const value = item.key;
      const { label } = item.hits.hits.hits[0]["_source"]["site_id"];
      return {
        label: `${label}(${count})`,
        value,
      };
    });
    return options;
  };

  const getOptionsPlots = () => {
    const options = facets.plot.buckets.map((item) => {
      const count = item.doc_count;
      const value = item.key;
      const { label } = item.hits.hits.hits[0]["_source"].plot;
      return {
        label: `${label}(${count})`,
        value,
      };
    });
    return options;
  };

  const getOptionsSiteVisitId = () => {
    const options = facets["site_visit_id"].buckets.map((item) => {
      const count = item.doc_count;
      const value = item.key;
      const label = item.key;
      return {
        label: `${label}(${count})`,
        value,
      };
    });
    return options;
  };

  const getOptionsImageType = () => {
    const arrOptions = [];
    facets["image_type"].buckets.forEach((item) => {
      const count = item.doc_count;
      const value = item.key;
      const { label } = item.hits.hits.hits[0]["_source"]["image_type"];
      if (value === "ancillary") {
        item["image_type_sub"].buckets.forEach((sub_type) => {
          const subCount = sub_type.doc_count;
          const subValue = `ancillary.${sub_type.key.replace(/%20/gi, " ")}`;
          const subLabel = `${label}[${startCase(
            sub_type.key.replace(/%20/gi, " "),
          )}]`;
          arrOptions.push({
            label: `${subLabel}(${subCount})`,
            value: subValue,
          });
        });
      } else {
        arrOptions.push({ label: `${label}(${count})`, value });
      }
    });
    return arrOptions;
  };

  const shouldReloadSiteOptions = () => {
    // Check if there is anything selected in the site options
    if (selectedSites !== null) return false;
    if (
      selectedPlots !== null
      || selectedVisitIds !== null
      || selectedImageTypes
    ) {
      return true;
    }
    return false;
  };

  const shouldReloadPlotOptions = () => {
    if (selectedPlots !== null) return false;
    if (
      selectedSites !== null
      || selectedVisitIds !== null
      || selectedImageTypes
    ) {
      return true;
    }
    return false;
  };

  const shouldReloadSiteVisitIdOptions = () => {
    if (selectedVisitIds !== null) return false;
    if (
      selectedSites !== null
      || selectedPlots !== null
      || selectedImageTypes
    ) {
      return true;
    }
    return false;
  };

  const shouldReloadImageTypesOptions = () => {
    if (selectedImageTypes !== null) return false;
    if (selectedSites !== null || selectedPlots !== null || selectedVisitIds) {
      return true;
    }
    return false;
  };

  let optionsSites = [];
  let optionsPlots = [];
  let optionsSiteVisitId = [];
  let optionsImageTypes = [];

  const populateFacets = () => {
    if (!isEmpty(facets)) {
      // Initial app render we want to populate
      // the store site options
      if (storedSiteOptions.length === 0) {
        optionsSites = getOptionsSites();
        storedSiteOptions = [...optionsSites];
      }
      // Reload site option if nothing was selected
      // The user must have selected stuff below
      // first (e.g. plots, site visit id or image types)
      if (shouldReloadSiteOptions()) {
        optionsSites = getOptionsSites();
        storedSiteOptions = [...optionsSites];
      } else {
        optionsSites = [...storedSiteOptions];
      }

      if (storedPlotOptions.length === 0) {
        optionsPlots = getOptionsPlots();
        storedPlotOptions = [...optionsPlots];
      }
      if (shouldReloadPlotOptions()) {
        optionsPlots = getOptionsPlots();
        storedPlotOptions = [...optionsPlots];
      } else {
        optionsPlots = storedPlotOptions;
      }

      if (storedSiteVisitIds.length === 0) {
        optionsSiteVisitId = getOptionsSiteVisitId();
        storedSiteVisitIds = [...optionsSiteVisitId];
      }
      if (shouldReloadSiteVisitIdOptions()) {
        optionsSiteVisitId = getOptionsSiteVisitId();
        storedSiteVisitIds = [...optionsSiteVisitId];
      } else {
        optionsSiteVisitId = storedSiteVisitIds;
      }
      if (storedImageTypes.length === 0) {
        optionsImageTypes = getOptionsImageType();
        storedImageTypes = [...optionsImageTypes];
      }
      if (shouldReloadImageTypesOptions()) {
        optionsImageTypes = getOptionsImageType();
        storedImageTypes = [...optionsImageTypes];
      } else {
        optionsImageTypes = storedImageTypes;
      }
    }
  };

  const dispatchFaceChange = (facetParam) => {
    dispatch(selectedFilterAction(facetParam));
    dispatch(fetchFacetsAction(facetParam));
  };

  const siteSelect = (selectedOptions) => {
    let facetParams = {};
    if (selectedOptions !== null) {
      const selected = selectedOptions.map((option) => option.value);
      if (selected.length !== 0) {
        facetParams = { ...facetParams, site_id: selected.join() };
        setSelectedSites(selected.join());
      } else {
        setSelectedSites(null);
      }
    } else {
      setSelectedSites(null);
    }

    if (selectedPlots !== null) {
      facetParams = { ...facetParams, plot: selectedPlots };
    }
    if (selectedVisitIds !== null) {
      facetParams = { ...facetParams, site_visit_id: selectedVisitIds };
    }
    if (selectedImageTypes !== null) {
      facetParams = { ...facetParams, image_type: selectedImageTypes };
    }

    if (selectedImageTypeSubs !== null) {
      facetParams = { ...facetParams, image_type_sub: selectedImageTypeSubs };
    }

    dispatchFaceChange(facetParams);
  };

  const plotSelect = (selectedOptions) => {
    let facetParams = {};
    if (selectedOptions !== null) {
      const selected = selectedOptions.map((option) => option.value);
      if (selected.length !== 0) {
        facetParams = { ...facetParams, plot: selected.join() };
        setSelectedPlots(selected.join());
      } else {
        setSelectedPlots(null);
      }
    } else {
      setSelectedPlots(null);
    }

    if (selectedSites !== null) {
      facetParams = { ...facetParams, site_id: selectedSites };
    }
    if (selectedVisitIds !== null) {
      facetParams = { ...facetParams, site_visit_id: selectedVisitIds };
    }
    if (selectedImageTypes !== null) {
      facetParams = { ...facetParams, image_type: selectedImageTypes };
    }

    if (selectedImageTypeSubs !== null) {
      facetParams = { ...facetParams, image_type_sub: selectedImageTypeSubs };
    }

    dispatchFaceChange(facetParams);
  };

  const visitIdSelect = (selectedOptions) => {
    let facetParams = {};
    if (selectedOptions !== null) {
      const selected = selectedOptions.map((option) => option.value);
      if (selected.length !== 0) {
        facetParams = { ...facetParams, site_visit_id: selected.join() };
        setSelectedVisitIds(selected.join());
      } else {
        setSelectedVisitIds(null);
      }
    } else {
      setSelectedVisitIds(null);
    }

    if (selectedSites !== null) {
      facetParams = { ...facetParams, site_id: selectedSites };
    }
    if (selectedPlots !== null) {
      facetParams = { ...facetParams, plot: selectedPlots };
    }
    if (selectedImageTypes !== null) {
      facetParams = { ...facetParams, image_type: selectedImageTypes };
    }
    if (selectedImageTypeSubs !== null) {
      facetParams = { ...facetParams, image_type_sub: selectedImageTypeSubs };
    }

    dispatchFaceChange(facetParams);
  };

  const imageTypeSelect = (selectedOptions) => {
    let facetParams = {};
    if (selectedOptions !== null) {
      const selected = selectedOptions.map((option) => option.value);
      if (selected.length !== 0) {
        const image_types = [];
        const image_types_sub = [];
        selected.forEach((img) => {
          if (img.includes("ancillary")) {
            const parts = img.split(".");
            image_types.push(parts[0]);
            image_types_sub.push(parts[1]);
          } else {
            image_types.push(img);
          }
        });
        if (image_types.length !== 0) {
          facetParams = { ...facetParams, image_type: image_types.join() };
          setSelectedImageTypes(image_types.join());
        }
        if (image_types_sub.length !== 0) {
          facetParams = {
            ...facetParams,
            image_type_sub: image_types_sub.join(),
          };
          setSelectedImageTypeSubs(image_types_sub.join());
        }
      } else {
        setSelectedImageTypes(null);
        setSelectedImageTypeSubs(null);
      }
    } else {
      setSelectedImageTypes(null);
      setSelectedImageTypeSubs(null);
    }

    if (selectedSites !== null) {
      facetParams = { ...facetParams, site_id: selectedSites };
    }
    if (selectedPlots !== null) {
      facetParams = { ...facetParams, plot: selectedPlots };
    }
    if (selectedVisitIds !== null) {
      facetParams = { ...facetParams, site_visit_id: selectedVisitIds };
    }

    dispatchFaceChange(facetParams);
  };

  /* Sidebar Styles */
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      fontSize: "16px",
    }),
    option: (styles, {
      data, isDisabled, isFocused, isSelected,
    }) => {
      const color = "#ED694B";
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
            ? data.color
            : isFocused
              ? "B3D4C9"
              : null,
        color: isDisabled
          ? "#ED694B"
          : isSelected
            ? chroma.contrast(color, "#ED694B") > 2
              ? "#ED694B"
              : "#ED694B"
            : data.color,
        fontSize: isFocused ? "16px" : isSelected ? "20px" : data.color,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          backgroundColor: !isDisabled && (isSelected ? data.color : "#ED694B"),
          color: "#ED694B",
        
        },
        ":hover": {
          backgroundColor: "#B3D4C9",
          // color: '#fff'
        },
      };
    },
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: "#B3D4C9",
      color: "#00565D",
      fontSize: "18.5px",
      borderRadius: "3px",
    }),
  };

  populateFacets();
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
        styles={colourStyles}
        // closeMenuOnSelect={false}
      />
      <Select
        className="mb-4"
        isMulti
        options={optionsPlots}
        placeholder="Select Plots"
        isSearchable
        onChange={(e) => plotSelect(e)}
        styles={colourStyles}
      />
      <Select
        className="mb-4"
        isMulti
        options={optionsSiteVisitId}
        placeholder="Select Site Visit Ids"
        isSearchable
        onChange={visitIdSelect}
        styles={colourStyles}
      />
      <Select
        className="mb-4"
        isMulti
        options={optionsImageTypes}
        placeholder="Select Image Types"
        isSearchable
        onChange={imageTypeSelect}
        styles={colourStyles}
      />
    </div>
  );
};
export default BioFacets;

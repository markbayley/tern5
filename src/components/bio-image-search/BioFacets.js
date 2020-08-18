import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { selectedFilterAction, fetchFacetsAction } from "../../store/reducer";
import { startCase, isEmpty } from "lodash";
import { Spinner } from "react-bootstrap";

// const optionsSites = [
//   {
//     label: "Sites",
//     options: [
//       {
//         value: "ali",
//         label: "Alice Mulgal (1294939)",
//       },
//       {
//         value: "Boya",
//         label: "Boya (244590)",
//       },
//       {
//         value: "ct",
//         label: "Cape Tribulation (56794)",
//       },
//       {
//         value: "Cowbay",
//         label: "Cowbay (504959)",
//       },
//     ],
//   },
// ];
// const optionsPlots = [
//   {
//     label: "Plots",
//     options: [
//       {
//         label: "core1ha",
//         value: "core1ha",
//       },
//       {
//         label: "hummock_oblique",
//         value: "hummock_oblique",
//       },
//     ],
//   },
// ];
// const optionsSiteVisitId = [
//   {
//     label: "Site Visit Id",
//     options: [
//       {
//         value: "20120217",
//         label: "2012-02-17",
//       },
//       {
//         value: "20120402",
//         label: "2012-04-02",
//       },
//       {
//         value: "20120517",
//         label: "2012-05-17",
//       },
//       {
//         value: "20120615",
//         label: "2012-06-15",
//       },
//       {
//         value: "20121026",
//         label: "2012-10-26",
//       },
//     ],
//   },
// ];
// const optionsImageTypes = [
//   {
//     label: "Ancillary",
//     options: [
//       {
//         value: "Fauna",
//         label: "Ancillary Fauna",
//       },
//       {
//         value: "Flora",
//         label: ">Flora",
//       },
//       {
//         value: "Fungi",
//         label: ">Fungi",
//       },
//       {
//         value: "General",
//         label: ">General",
//       },
//       {
//         value: "Samford_camera_trap",
//         label: ">Samford Camera Trap",
//       },
//     ],
//   },
//   {
//     value: "Leaf Area Index",
//     label: "Leaf Area Index",
//   },
//   {
//     value: "Panorama",
//     label: "Panorama",
//   },
//   {
//     value: "Phenocam",
//     label: "Phenocam",
//   },
//   {
//     value: "Phtopoint",
//     label: "Photopoint",
//   },
// ];
const optionsDateRange = [];

const BioFacets = () => {
  const facets = useSelector((state) => state.search.facets);
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.search.selectedFilter);

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
  if (!isEmpty(facets)) {
    optionsSites = getOptionsSites();
    optionsPlots = getOptionsPlots();
    optionsSiteVisitId = getOptionsSiteVisitId();
    optionsImageTypes = getOptionsImageType();
  }

  useEffect(() => {
    console.log("In useEffect of Facets");
    dispatch(fetchFacetsAction({}));
  }, []);

  const siteSelect = (siteOptions) => {
    console.log("e=", siteOptions);
    // alert("Site select!", e);
    const selectedSites = siteOptions.map((option) => option.value);
    console.log("selectedSites = ", selectedSites.join());
    dispatch(selectedFilterAction({ site_id: selectedSites.join() }));
  };

  return (
    <div>
      <Select
        className="mb-3"
        isMulti
        options={optionsSites}
        placeholder="Select Sites"
        isSearchable
        autoFocus
        onChange={(e) => siteSelect(e)}
      />
      <Select
        className="mb-3"
        isMulti
        options={optionsPlots}
        placeholder="Select Plots"
        isSearchable
      />
      <Select
        className="mb-3"
        isMulti
        options={optionsSiteVisitId}
        placeholder="Select Site Visit Ids"
        isSearchable
      />
      <Select
        className="mb-3"
        isMulti
        options={optionsImageTypes}
        placeholder="Select Image Types"
        isSearchable
      />
      {/* <Select
        className="mb-3"
        isMulti
        options={optionsSiteVisitId}
        placeholder="Select Site Visit Id"
        isSearchable
      /> */}
    </div>
  );
};
export default BioFacets;

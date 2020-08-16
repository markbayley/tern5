import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedFilterAction, fetchFacetsAction } from "../../store/reducer";
import { startCase, isEmpty } from "lodash";
import { parseBioImagesDate } from "../../bio_utils/bio_helpers";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdChevronRight,
  MdKeyboardArrowDown,
  MdAddBox,
  MdIndeterminateCheckBox,
  MdFolder,
  MdFolderOpen,
  MdInsertDriveFile,
} from "react-icons/md";

const ImageFilterTypeReactCkbTree = () => {
  const facets = useSelector((state) => state.search.facets);
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.search.selectedFilter);

  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  console.log("filters=", facets);

  useEffect(() => {
    console.log("In useEffect of Facets");
    dispatch(fetchFacetsAction());
  }, []);

  // Create checkbox tree nodes
  let nodes = [
    {
      value: "Sites",
      label: "Sites",
      children: [],
    },
    {
      value: "ImageTypes",
      label: "Image Types",
      children: [],
    },
  ];

  const sitesPrefix = "Sites.";
  const imageTypesPrefix = "ImagesTypes.";

  const loadFacets = () => {
    if (!isEmpty(facets)) {
      //Load sites to checkbox tree
      const sites = facets["site_id"]["buckets"];
      sites.map((site) => {
        // Get site name
        let siteNameValue = site["key"];
        let siteNameLabel =
          site["hits"]["hits"]["hits"][0]["_source"]["site_id"].label;
        //   let totalSites = site["doc_count"];

        let siteParent = {
          value: siteNameValue,
          label: siteNameLabel + "(" + site["doc_count"] + ")",
          children: [],
        };

        // Get site plots
        const sitePlots = site["plot"]["buckets"];
        // For each plot process its
        //children which are visit date

        let plotParent = {
          value: "Plots_" + siteNameValue,
          label: "Plots (" + sitePlots.length + ")",
          children: [],
        };
        sitePlots.map((plot) => {
          let plotNameValue = siteNameValue + "." + plot["key"];
          let plotNameLabel = plot["key"];
          // let totalPlots = plot["doc_count"];
          //for each plot process plot/site visit date
          let visitDateParent = {
            value: "VisitDates_" + plotNameValue,
            label:
              "Visit Date (" + plot["site_visit_id"]["buckets"].length + ")",
            children: [],
          };
          plot["site_visit_id"]["buckets"].map((visit) => {
            //   const totalImagesPerVisit = visit["doc_count"];
            const plotVisitValue =
              sitesPrefix + plotNameValue + "." + visit["key"];
            const plotVisitLabel = parseBioImagesDate(visit["key"]);
            visitDateParent.children.push({
              value: plotVisitValue,
              label: plotVisitLabel,
            });
          });
          let tempPlotParent = {
            value: plotNameValue,
            label: plotNameLabel,
            children: [],
          };
          tempPlotParent["children"].push(visitDateParent);
          plotParent.children.push(tempPlotParent);
        });
        siteParent.children.push(plotParent);
        nodes[0].children.push(siteParent);
        return null;
      });

      //Load images types and image subtypes to checkbox tree
      const image_types = facets["image_type"]["buckets"];
      image_types.map((image_type) => {
        const imageTypeValue = image_type.key;
        const imageTypeLabel = startCase(image_type.key);
        const imageTypeParent = {
          value: imageTypeValue,
          label: imageTypeLabel,
        };

        let sub_types = [];
        image_type["image_type_sub"]["buckets"].map((sub_type) => {
          //const subTypeCount = sub_type.doc_count;
          const imageSubTypeValue =
            imageTypesPrefix +
            imageTypeValue +
            "." +
            sub_type.key.replace(/%20/gi, " ");
          const imageSubTypeLabel = startCase(
            sub_type.key.replace(/%20/gi, " ")
          );
          sub_types.push({
            value: imageSubTypeValue,
            label: imageSubTypeLabel,
          });
          return null;
        });
        imageTypeParent["children"] = sub_types;
        nodes[1].children.push(imageTypeParent);

        return null;
      });
      //console.log("nodes=", nodes);
    }
  };

  // Collect all the filters selected
  // in the tree structure
  const handleOnChecked = (selected) => {
     console.log("checked: ", selected);
    // console.log("expanded: ", expanded);
    setChecked(selected);

    //Collect checked sites
    // let selectedFilterItems = {
    //   site_id: [],
    //   plot: [],
    //   site_visit_id: [],
    //   image_type: [],
    //   image_type_sub: [],
    // };
    let selectedFilterItems = {
      "site_id": [],
      plot: [],
      site_visit_id: [],
      image_type: [],
      image_type_sub: [],
    };
    selected.map((item) => {
      if (item.includes(sitesPrefix)) {
        // const selectedSite = item.split(".");
        // selectedFilterItems["site_id"].indexOf(selectedSite[1]) === -1 &&
        //   selectedFilterItems["site_id"].push(selectedSite[1]);
        // selectedFilterItems["plot"].indexOf(selectedSite[2]) === -1 &&
        //   selectedFilterItems["plot"].push(selectedSite[2]);
        // selectedFilterItems["site_visit_id"].indexOf(selectedSite[3]) === -1 &&
        //   selectedFilterItems["site_visit_id"].push(selectedSite[3]);
        //Sites.alic.asm.20160710
        const selectedSite = item.split("Sites.")
        selectedFilterItems["site_id"].indexOf(selectedSite[1]) === -1 &&
          selectedFilterItems["site_id"].push(selectedSite[1]);
      }
      if (item.includes(imageTypesPrefix)) {
        const selectedImageType = item.split(".");
        selectedFilterItems["image_type"].indexOf(selectedImageType[1]) ===
          -1 && selectedFilterItems["image_type"].push(selectedImageType[1]);
        selectedFilterItems["image_type_sub"].indexOf(selectedImageType[2]) ===
          -1 &&
          selectedFilterItems["image_type_sub"].push(selectedImageType[2]);
      }
    });

    // console.log("selectedFilterItems=", selectedFilterItems);

    //  let updatedFilter = {...selectedFilter};
    let updatedFilter = {};
    if (selectedFilterItems["site_id"].length !== 0) {
      const siteFilter = { "concat-selected": selectedFilterItems["site_id"].join() };
      updatedFilter = { ...updatedFilter, ...siteFilter };
    }
    // if (selectedFilterItems["plot"].length !== 0) {
    //   const plotFilter = { plot: selectedFilterItems["plot"].join() };
    //   updatedFilter = { ...updatedFilter, ...plotFilter };
    // }
    // if (selectedFilterItems["site_visit_id"].length !== 0) {
    //   const siteVisitIdFilter = {
    //     site_visit_id: selectedFilterItems["site_visit_id"].join(),
    //   };
    //   updatedFilter = { ...updatedFilter, ...siteVisitIdFilter };
    // }
    if (selectedFilterItems["image_type"].length !== 0) {
      const imageTypeFilter = {
        image_type: selectedFilterItems["image_type"].join(),
      };
      updatedFilter = { ...updatedFilter, ...imageTypeFilter };
    }
    if (selectedFilterItems["image_type_sub"].length !== 0) {
      const imageTypeSubFilter = {
        image_type_sub: selectedFilterItems["image_type_sub"].join(),
      };
      updatedFilter = { ...updatedFilter, ...imageTypeSubFilter };
    }

    console.log("updatedFilter=", updatedFilter);
    dispatch(selectedFilterAction(updatedFilter));
  };

  loadFacets();

  const icons = {
    check: <MdCheckBox className="rct-icon rct-icon-check" />,
    uncheck: <MdCheckBoxOutlineBlank className="rct-icon rct-icon-uncheck" />,
    halfCheck: (
      <MdIndeterminateCheckBox className="rct-icon rct-icon-half-check" />
    ),
    expandClose: <MdChevronRight className="rct-icon rct-icon-expand-close" />,
    expandOpen: (
      <MdKeyboardArrowDown className="rct-icon rct-icon-expand-open" />
    ),
    expandAll: <MdAddBox className="rct-icon rct-icon-expand-all" />,
    collapseAll: (
      <MdIndeterminateCheckBox className="rct-icon rct-icon-collapse-all" />
    ),
    parentClose: <MdFolder className="rct-icon rct-icon-parent-close" />,
    parentOpen: <MdFolderOpen className="rct-icon rct-icon-parent-open" />,
    leaf: <MdInsertDriveFile className="rct-icon rct-icon-leaf-close" />,
  };

  return (
    <div className="tree-nodes">
      <CheckboxTree
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onCheck={(checked) => handleOnChecked(checked)}
        onExpand={(expanded) => setExpanded(expanded)}
        icons={icons}
      />
    </div>
  );
};

//TODO remove later.
function areEqual(prevProps, nextProps) {
  return true;
}
// export default ImageFilterTypeReactCkbTree;
export default React.memo(ImageFilterTypeReactCkbTree, areEqual);

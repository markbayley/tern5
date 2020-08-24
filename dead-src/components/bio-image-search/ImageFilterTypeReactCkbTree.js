import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCase, isEmpty } from "lodash";
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
import CheckboxTree from "react-checkbox-tree";
import { selectedFilterAction, fetchFacetsAction } from "../../store/reducer";
import { parseBioImagesDate } from "../../bio_utils/bio_helpers";

import "react-checkbox-tree/lib/react-checkbox-tree.css";

const ImageFilterTypeReactCkbTree = () => {
  const facets = useSelector((state) => state.search.facets);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    dispatch(fetchFacetsAction());
  }, [dispatch]);

  // Create checkbox tree nodes
  const nodes = [
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
      // Load sites to checkbox tree
      const sites = facets["site_id"].buckets;
      sites.map((site) => {
        // Get site name
        const siteNameValue = site.key;
        const siteNameLabel = site.hits.hits.hits[0]["_source"]["site_id"].label;
        //   let totalSites = site["doc_count"];

        const siteParent = {
          value: siteNameValue,
          // label: `${siteNameLabel}(${site["doc_count"]})`,
          label: `${siteNameLabel} test`,
          children: [],
        };

        // Get site plots
        const sitePlots = site.plot.buckets;
        // For each plot process its
        // children which are visit date

        const plotParent = {
          value: `Plots_${siteNameValue}`,
          label: `Plots (${sitePlots.length})`,
          children: [],
        };
        sitePlots.forEach((plot) => {
          const plotNameValue = `${siteNameValue}-${plot.key}`;
          const plotNameLabel = plot.key;
          // let totalPlots = plot["doc_count"];
          // for each plot process plot/site visit date
          const visitDateParent = {
            value: `VisitDates_${plotNameValue}`,
            label:
              `Visit Date (${plot["site_visit_id"].buckets.length})`,
            children: [],
          };
          plot["site_visit_id"].buckets.forEach((visit) => {
            //   const totalImagesPerVisit = visit["doc_count"];
            const plotVisitValue = `${sitesPrefix + plotNameValue}-${visit.key}`;
            const plotVisitLabel = parseBioImagesDate(visit.key);
            visitDateParent.children.push({
              value: plotVisitValue,
              label: plotVisitLabel,
            });
          });
          const tempPlotParent = {
            value: plotNameValue,
            label: plotNameLabel,
            children: [],
          };
          tempPlotParent.children.push(visitDateParent);
          plotParent.children.push(tempPlotParent);
        });
        siteParent.children.push(plotParent);
        nodes[0].children.push(siteParent);
        return null;
      });

      // Load images types and image subtypes to checkbox tree
      const image_types = facets["image_type"].buckets;
      image_types.map((image_type) => {
        const imageTypeValue = image_type.key;
        const imageTypeLabel = startCase(image_type.key);
        const imageTypeParent = {
          value: imageTypeValue,
          label: imageTypeLabel,
        };

        const sub_types = [];
        image_type["image_type_sub"].buckets.map((sub_type) => {
          // const subTypeCount = sub_type.doc_count;
          const imageSubTypeValue = `${imageTypesPrefix + imageTypeValue}.${sub_type.key.replace(/%20/gi, " ")}`;
          const imageSubTypeLabel = startCase(sub_type.key.replace(/%20/gi, " "));
          sub_types.push({
            value: imageSubTypeValue,
            label: imageSubTypeLabel,
          });
          return null;
        });
        imageTypeParent.children = sub_types;
        nodes[1].children.push(imageTypeParent);

        return null;
      });
      // console.log("nodes=", nodes);
    }
  };

  // Collect all the filters selected
  // in the tree structure
  const handleOnChecked = (selected) => {
    setChecked(selected);

    // Collect checked sites
    const selectedFilterItems = {
      site_id: [],
      image_type: [],
      image_type_sub: [],
    };
    selected.forEach((item) => {
      if (item.includes(sitesPrefix)) {
        // const selectedSite = item.split(".");
        // selectedFilterItems["site_id"].indexOf(selectedSite[1]) === -1 &&
        //   selectedFilterItems["site_id"].push(selectedSite[1]);
        // selectedFilterItems["plot"].indexOf(selectedSite[2]) === -1 &&
        //   selectedFilterItems["plot"].push(selectedSite[2]);
        // selectedFilterItems["site_visit_id"].indexOf(selectedSite[3]) === -1 &&
        //   selectedFilterItems["site_visit_id"].push(selectedSite[3]);
        // Sites.alic.asm.20160710
        const selectedSite = item.split("Sites.");
        if (selectedFilterItems["site_id"].indexOf(selectedSite[1]) === -1) {
          selectedFilterItems["site_id"].push(selectedSite[1]);
        }
      }
      if (item.includes(imageTypesPrefix)) {
        const selectedImageType = item.split(".");
        if (selectedFilterItems["image_type"].indexOf(selectedImageType[1]) === -1) {
          selectedFilterItems["image_type"].push(selectedImageType[1]);
        }
        if (selectedFilterItems["image_type_sub"].indexOf(selectedImageType[2]) === -1) {
          selectedFilterItems["image_type_sub"].push(selectedImageType[2]);
        }
      }
    });

    // console.log("selectedFilterItems=", selectedFilterItems);

    //  let updatedFilter = {...selectedFilter};
    let updatedFilter = { "concat-selected": "" };
    // TODO: this code is terrible. ... why ... expansions when object con be updated directly?
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
        onCheck={(check) => handleOnChecked(check)}
        onExpand={(expand) => setExpanded(expand)}
        icons={icons}
      />
    </div>
  );
};

// export default ImageFilterTypeReactCkbTree;
export default React.memo(ImageFilterTypeReactCkbTree);

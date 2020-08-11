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
      value: "Image Types",
      label: "Image Types",
      children: [],
    },
  ];

  if (!isEmpty(facets)) {
    //Load sites to checkbox tree
    const sites = facets["site_id"]["buckets"];
    sites.map((site) => {
      // Get site name
      let siteNameValue = "Site." + site["key"];
      let siteNameLabel =
        site["hits"]["hits"]["hits"][0]["_source"]["site_id"].label;
      //   let totalSites = site["doc_count"];

      let siteParent = {
        value: siteNameValue,
        label: siteNameLabel,
        children: [],
      };

      // Get site plots
      const sitePlots = site["plot"]["buckets"];
      // For each plot process its
      //children which are visit date

      let plotParent = {
        value: "Plots_" + siteNameValue,
        label: "Plots",
        children: [],
      };
      sitePlots.map((plot) => {
        let plotNameValue = siteNameValue + "_Plot." + plot["key"];
        let plotNameLabel = plot["key"];
        // let totalPlots = plot["doc_count"];
        //for each plot process plot/site visit date
        let visitDateParent = {
          value: "VisitDates_" + plotNameValue,
          label: "Visit Date",
          children: [],
        };
        plot["site_visit_id"]["buckets"].map((visit) => {
          //   const totalImagesPerVisit = visit["doc_count"];
          const plotVisitValue = plotNameValue + "_Visit." + visit["key"];
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
    // const image_type_sub = facets["image_type_sub"];
    image_types.map((image_type) => {
      let sub_types = [];
      image_type["image_type_sub"]["buckets"].map((sub_type) => {
        //const subTypeCount = sub_type.doc_count;
        const imageSubTypeValue = sub_type.key.replace(/%20/gi, " ");
        const imageSubTypeLabel = startCase(imageSubTypeValue);
        const imageSubTypeKey = "image_type_sub_" + imageSubTypeValue;
        sub_types.push({ value: imageSubTypeKey, label: imageSubTypeLabel });
        return null;
      });
      const imageTypeValue = "image_type_" + image_type.key;
      const imageTypeLabel = startCase(image_type.key);
      const imageTypeParent = { value: imageTypeValue, label: imageTypeLabel };
      imageTypeParent["children"] = sub_types;
      nodes[1].children.push(imageTypeParent);

      return null;
    });
    //console.log("nodes=", nodes);
  }

  //TODO Mosheh 11-08-2020 8:49pm. This handle has not been checked or
  //modified after the API changed - So not working
  // properly. I am very tired now I will look at it tommorrow!!
  const handleOnChecked = (selected) => {
    // console.log("checked: ", selected);
    // console.log("expanded: ", expanded);
    setChecked(selected);

    //Collect checked sites
    const selectedFilterItems = {
      site_id: [],
      image_type: [],
      image_type_sub: [],
      plot: [],
      site_visit_id: [],
    };
    selected.map((item) => {
      if (item.includes("site_id_")) {
        const site = item.split("site_id_");
        selectedFilterItems["site_id"].push(site[1]);
      }
      if (item.includes("image_type_")) {
        const image = item.split("image_type_");
        selectedFilterItems["image_type"].push(image[1]);
      }
      if (item.includes("image_type_sub_")) {
        const imageSub = item.split("image_type_sub_");
        selectedFilterItems["image_type_sub"].push(imageSub[1]);
      }
      if (item.includes("plot_")) {
        const plot = item.split("plot_");
        selectedFilterItems["plot"].push(plot[1]);
      }
      if (item.includes("site_visit_id_")) {
        const siteVisitId = item.split("site_visit_id_");
        selectedFilterItems["site_visit_id"].push(siteVisitId[1]);
      }
    });

    // Note: the extraction below will change once the api can handle
    // arrays. For now I am just extracting the first item and for that
    // matter just the first of site name and first of image type.
    const siteFilter = { site_id: selectedFilterItems["site_id"][0] };
    const siteImage = { image_type: selectedFilterItems["image_type"][0] };
    const updatedFilter = { ...selectedFilter, ...siteFilter, ...siteImage };

    dispatch(selectedFilterAction(updatedFilter));
  };

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

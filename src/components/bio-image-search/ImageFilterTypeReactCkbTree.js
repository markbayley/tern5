import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchAction, selectedFilterAction } from "../../store/reducer";
import { startCase, isEmpty } from "lodash";
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
  const filters = useSelector((state) => state.search.filters);
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.search.selectedFilter);

  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  //console.log("filters=", filters);

  const parseDate = (value) => {
    const y = value.substr(0, 4);
    const m = value.substr(4, 2);
    const d = value.substr(6, 2);
    return y + "-" + m + "-" + d;
  };
  // Create checkbox tree nodes
  // Image Types for now
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
    {
      value: "Site Visit Date",
      label: "Site Visit Date",
      children: [],
    },
    {
      value: "Plots",
      label: "Plots",
      children: [],
    },
  ];

  if (!isEmpty(filters)) {
    //Load sites to checkbox tree
    const sites = filters["site_id"];
    sites.map((site) => {
      const siteKey = "site_id_" + site.key;
      nodes[0].children.push({ value: siteKey, label: site.label });
      // console.log("Number of images: ", data.doc_count);
      return null;
    });

    //Load images types and image subtypes to checkbox tree
    const image_type = filters["image_type"];
    const image_type_sub = filters["image_type_sub"];
    image_type.map((image_doc) => {
      if (image_doc.key === "ancillary") {
        //get sub types of ancillary
        let sub_types = [];
        image_type_sub.map((sub_type) => {
          const value = sub_type.key.replace(/%20/gi, " ");
          const label = startCase(sub_type.label.replace(/%20/gi, " "));
          const imageSubTypeKey = "image_type_sub_" + value;
          sub_types.push({ value: imageSubTypeKey, label: label });
          return null;
        });
        const ancillaryKey = "image_type_" + image_doc.key;
        const ancillary = { value: ancillaryKey, label: image_doc.label };
        ancillary["children"] = sub_types;
        nodes[1].children.push(ancillary);
      } else {
        //for lai,panorama,phenocam and photopoint
        const anyimageKey = "image_type_" + image_doc.key;
        nodes[1].children.push({
          value: anyimageKey,
          label: image_doc.label,
        });
      }
      return null;
    });

    //Load Site visit dates to checkbox tree
    const siteVisitDates = filters["site_visit_id"];
    siteVisitDates.map((visitDate) => {
      const siteVisitKey = "site_visit_id_" + visitDate.key;
      const label = parseDate(visitDate.label);
      nodes[2].children.push({
        value: siteVisitKey,
        label: label,
      });
      return null;
    });

    // Load Site Plots to checkbox tree
    //Note: Temp - plots should be a sub tree of
    // Sites. However I cannot link plots to site because
    // of API limitations - to be fixed!
    const sitePlots = filters["plot"];
    sitePlots.map((plot) => {
      const plotKey = "plot_" + plot.key;
      nodes[3].children.push({
        value: plotKey,
        label: plot.label,
      });
      return null;
    });
    //console.log("nodes=", nodes);
  }

  const handleOnChecked = (selected) => {
    console.log("checked: ", selected);
    console.log("expanded: ", expanded);
    setChecked(selected);

    //Collect checked sites
    const selectedSites = [];
    selected.map((item) => {
      if (item.includes("site_id_")) {
        // console.log("item=", item);
        const site = item.split("site_id_");
        // console.log("site=", site[1]);
        selectedSites.push(site[1]);
      }
    });
    const siteFilter = { site_id: selectedSites[0] };
    const updatedFilter = { ...selectedFilter, ...siteFilter };
    dispatch(selectedFilterAction(updatedFilter));
    //TODO Add selected image types
    //TODO Add site visit date
  };

  ////////
  // Remove later
  const nodesTest = [
    {
      value: "Sites",
      label: "Sites",
      children: [
        {
          value: "Alice Mulga",
          label: "Alic Mulga",
          children: [
            {
              value: "Plots_Alice_Mulga",
              label: "Plots",
              children: [
                {
                  value: "Alice Mulga_Asm",
                  label: "Asm",
                },
                {
                  value: "Alice Mulga_Asn",
                  label: "Asn",
                },
                {
                  value: "Alice Mulga_Callistris",
                  label: "Callistris",
                },
                {
                  value: "Alice Mulga_Core1ha",
                  label: "Core1ha",
                },
              ],
            },
          ],
        },
        {
          value: "Boya",
          label: "Boya",
          children: [
            {
              value: "Plots_Boya",
              label: "Plots",
              children: [
                {
                  value: "Boya_Floodplain",
                  label: "Floodplain",
                },
                {
                  value: "Boya_Gimlet",
                  label: "Gimlet",
                },
                {
                  value: "Boya_Nadir",
                  label: "Nadir",
                },
                {
                  value: "Boya_Hummock_oblique",
                  label: "Hummock_oblique",
                },
              ],
            },
          ],
        },
        {
          value: "Cowbay",
          label: "Cowbay",
          children: [
            {
              value: "Plots_Cowbay",
              label: "Plots",
              children: [
                {
                  value: "Cowbay_Redgum",
                  label: "Redgum",
                },
                {
                  value: "Cowbay_Tte",
                  label: "Tte",
                },
                {
                  value: "Cowbay_Tussock_oblique",
                  label: "Tussock_oblique",
                },
                {
                  value: "Cowbay_Vivotech_overstorey",
                  label: "Vivotech_overstorey",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: "Image_Types",
      label: "Images Types",
      children: [
        {
          value: "Ancillary",
          label: "Ancillary",
          children: [
            {
              value: "Ancillary_Fauna",
              label: "Fauna",
            },
            {
              value: "Ancillary_Flora",
              label: "Flora",
            },
            {
              value: "Ancillary_Fungi",
              label: "Fungi",
            },
            {
              value: "Ancillary_General",
              label: "General",
            },
            {
              value: "Ancillary_NA",
              label: "NA",
            },
            {
              value: "Ancillary_Samford_camera_trap",
              label: "Samford Camera Trap",
            },
          ],
        },
        {
          value: "Leaf Area Index",
          label: "Leaf Area Index",
        },
        {
          value: "Panorama",
          label: "Panorama",
        },
        {
          value: "Phenocam",
          label: "Phenocam",
        },
        {
          value: "Phtopoint",
          label: "Photopoint",
        },
      ],
    },
    {
      value: "Site Visit Date",
      label: "Site Visit Date",
      children: [
        {
          value: "20120217",
          label: "2012-02-17",
        },
        {
          value: "20120402",
          label: "2012-04-02",
        },
        {
          value: "20120517",
          label: "2012-05-17",
        },
        {
          value: "20120615",
          label: "2012-06-15",
        },
        {
          value: "20121026",
          label: "2012-10-26",
        },
      ],
    },
  ];
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

function areEqual(prevProps, nextProps) {
  return true;
}
// export default ImageFilterTypeReactCkbTree;
export default React.memo(ImageFilterTypeReactCkbTree, areEqual);

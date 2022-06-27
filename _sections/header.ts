import { ShopifySection } from "types/shopify";

export const header: ShopifySection = {
  name: "Header",
  settings: [
    {
      type: "image_picker",
      id: "logo",
      label: "Logo",
    },
    {
      type: "link_list",
      id: "menu",
      label: "Menu",
    },
  ],
  blocks: [
    {
      type: "dropdown_menu_features",
      name: "Dropdown Feature Menu",
      settings: [
        {
          type: "text",
          id: "handle",
          label: "Menu item Handle",
          info: "Must match a top level menu item",
        },
        {
          type: "product_list",
          id: "menu_items",
          label: "Menu Items",
        },
      ],
    },
    {
      type: "dropdown_menu_carousel",
      name: "Dropdown Carousel Menu",
      settings: [
        {
          type: "text",
          id: "handle",
          label: "Menu item Handle",
          info: "Must match a top level menu item",
        },
        {
          type: "blog",
          id: "menu_items",
          label: "Menu Item Catalog",
        },
      ],
    },
    {
      type: "dropdown_menu_portfolio",
      name: "Dropdown Portfolio Menu",
      settings: [
        {
          type: "text",
          id: "handle",
          label: "Menu item Handle",
          info: "Must match a top level menu item",
        },
        {
          type: "blog",
          id: "menu_items",
          label: "Menu Item Catalog",
        },
      ],
    },
  ],
};

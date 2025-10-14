export const dataGridClassNames =
  "border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200";

export const dataGridSxStyles = (isDarkMode: boolean) => {
  // Color palette for easy access and modification
  const colors = {
    light: {
      text: "#111827", // Main text
      secondaryText: "#6b7280", // Secondary text and icons
      background: "white", // Main background
      headerBg: "#f9fafb", // Header and footer background
      rowHover: "#f3f4f6", // Row hover
      rowSelected: "#dbeafe", // Selected row
      borderColor: "#e5e7eb", // Borders
    },
    dark: {
      text: "#e5e7eb", // Main text
      secondaryText: "#a3a3a3", // Secondary text and icons
      background: "#111214", // Main background
      headerBg: "#1d1f21", // Header and footer background
      rowHover: "#374151", // Row hover
      rowSelected: "#4b5563", // Selected row
      borderColor: "#2d3135", // Borders
    },
  };

  const mode = isDarkMode ? "dark" : "light";

  return {
    // General grid styles
    border: "none",
    backgroundColor: colors[mode].background,
    color: colors[mode].text,

    "& .MuiDataGrid-columnHeaders": {
      color: colors[mode].text,
      '& [role="row"] > *': {
        backgroundColor: colors[mode].background,
        borderColor: colors[mode].borderColor,
        borderBottom: `1px solid ${colors[mode].borderColor}`,
      },
    },
    "&. MuiDataGrid-menuList ": {
      backgroundColor: "red",
    },

    // -- Cells and Rows --
    "& .MuiDataGrid-cell": {
      color: colors[mode].text,
      borderBottom: `1px solid ${colors[mode].borderColor}`,
    },
    "& .MuiDataGrid-row": {
      "&:hover": {
        backgroundColor: colors[mode].rowHover,
      },
      // Selected row style
      "&.Mui-selected": {
        backgroundColor: colors[mode].rowSelected,
        "&:hover": {
          backgroundColor: colors[mode].rowSelected, // Prevent hover color change when selected
        },
      },
    },

    // -- Icons --
    "& .MuiIconButton-root": {
      color: colors[mode].secondaryText,
    },
    "& .MuiSvgIcon-root": {
      color: colors[mode].secondaryText,
    },

    // -- Footer and Pagination --
    "& .MuiDataGrid-footerContainer": {
      backgroundColor: colors[mode].headerBg,
      color: colors[mode].secondaryText,
      borderTop: `1px solid ${colors[mode].borderColor}`,
    },
    "& .MuiTablePagination-root": {
      color: colors[mode].secondaryText,
    },
    // Disabled pagination button icons
    "& .Mui-disabled": {
      "& .MuiSvgIcon-root": {
        color: isDarkMode ? "#4b5563" : "#d1d5db",
      },
    },

    // -- Border cleanups --
    "& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader": {
      border: "none",
    },
    "& .MuiDataGrid-withBorderColor": {
      borderColor: "transparent",
    },
  };
};

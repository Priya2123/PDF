import {
  Paper,
  Typography,
  AppBar,
  Card,
  Grid,
  Container,
  List,
  ListItemIcon,
  Divider,
  CardHeader,
  InputBase,
} from "@material-ui/core";
//   import { Link } from "react-router-dom";
import styled from "styled-components";
import style from "styled-theming";

const getBackground = style("mode", {
  light: "rgba(248, 248, 248, 1)",
  dark: "#271e2a",
});
const getForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});

export const StyledGrid = styled(Grid)`
  background-color: ${getBackground};
  color: ${getForeground};
`;

export const Styleddiv = styled.div`
  background-color: ${getBackground};
  color: ${getForeground};
`;

const getcardBackground = style("mode", {
  light: "#eaeaea",
  dark: "#0f0015",
});
const getcardForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});

export const StyledPaper = styled(Paper)`
  background-color: ${getcardBackground};
  color: ${getcardForeground};
`;

export const StyledFooterGrid = styled(Grid)`
  background-color: ${getcardBackground};
  color: ${getcardForeground};
`;

const getdocBackground = style("mode", {
  light: "#eaeaea",
  dark: "#fff",
});
const getdocForeground = style("mode", {
  light: "#000",
  dark: "#000",
});

export const StyledCard = styled(Card)`
  background-color: ${getdocBackground};
  color: ${getdocForeground};
`;

export const StyledInputBase = styled(InputBase)`
  background-color: ${getdocBackground};
  color: ${getdocForeground};
`;

const gettypographyForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});
export const StyledTypography = styled(Typography)`
  color: ${gettypographyForeground};
`;

//
export const StyledSkillsMainGrid = styled(Grid)`
  background-color: ${getBackground};
  color: ${getForeground};
`;

const getLandingBackground = style("mode", {
  light: "#ffffff",
  dark: "#202020",
});
const getLandingForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});
const getLandingBorder = style("mode", {
  light: "1px solid #000",
  dark: "1px solid #eee",
});
const getboxShadow = style("mode", {
  light: "20px 20px 20px 20px #636363",
  dark: "4px 5px 4px 3px #eaeaea",
});
export const StyledAboutGrid = styled(Grid)`
  background-color: ${getLandingBackground};
  color: ${getLandingForeground};
`;

export const StyledContainer = styled(Container)`
  background-color: ${getLandingBackground};
  color: ${getLandingForeground};
`;
export const StyledTodoPaper = styled(Paper)`
  background-color: ${getLandingBackground};
  color: ${getLandingForeground};
  border: ${getLandingBorder};
`;
export const StyledWorksGrid = styled(Grid)`
  background-color: ${getLandingBackground};
  color: ${getLandingForeground};
`;

const getLandingGridBackground = style("mode", {
  light: "#eaeaea",
  dark: "#151515",
});
const getLandingGridForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});
const getBorderTop = style("mode", {
  light: "1px solid #000",
  dark: "1px solid #eaeaea",
});
// export const StyledFooterGrid = styled(Grid)`
//   background-color: ${getLandingGridBackground};
//   color: ${getLandingGridForeground};
//   border-top: ${getBorderTop};
// `;

export const StyledCardHeader = styled(CardHeader)`
  color: ${getLandingGridForeground};
  background-color: ${getLandingGridBackground};
`;

const getSkillBackground = style("mode", {
  light: "#fff",
  dark: "#151515",
});
const getSkillForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});
const getborder = style("mode", {
  light: "1.7px solid #494848",
  dark: "1.7px solid #eee",
});
export const StyledAboutPaper = styled(Paper)`
  background-color: ${getSkillBackground};
  color: ${getSkillForeground};
`;
export const StyledSkillGrid = styled(Grid)`
  background-color: ${getSkillBackground};
  color: ${getSkillForeground};
`;

// export const StyledTypography = styled(Typography)`
//   color: ${getSkillForeground};
// `;

const getPreviewPaperBackground = style("mode", {
  light: "#f0ead6",
  dark: "#353535",
});
const getPreviewPaperForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});
export const StyledPreviewPaper = styled(Paper)`
  background-color: ${getPreviewPaperBackground};
  color: ${getPreviewPaperForeground};
`;

const getdividerColor = style("mode", {
  light: "#000",
  dark: "#eee",
});
export const StyledDivider = styled(Divider)`
  background-color: ${getdividerColor};
`;

const getIconColor = style("mode", {
  light: "#000",
  dark: "#eee",
});
const getBackgroundFooterLink = style("mode", {
  light: "#000",
  dark: "#eee",
});
export const StyledFooterLink = styled.a`
  color: ${getIconColor};
  &.hover {
    color: ${getBackgroundFooterLink};
  }
  &.focus {
    color: ${getBackgroundFooterLink};
  }
  &.visited {
    color: ${getBackgroundFooterLink};
  }
  &.active {
    color: ${getBackgroundFooterLink};
  }
  &.link {
    color: ${getBackgroundFooterLink};
  }
`;

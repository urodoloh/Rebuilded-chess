import styled from "styled-components";
import { CellModel } from "../../utils/models/CellModel";
import { CellProps } from "../../utils/types/CellProps";

export const S = {
  CellWrapper: styled.div`
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.cell img {
      width: 48px;
      height: 48px;
      position: relative;
    }

    &.white {
      background-color: #808080;
    }

    &.black {
      background-color: #404040;
    }

    &.selected {
      background-color: red;
    }
  `,
  Available: styled.div`
    width: 12px;
    height: 12px;
    background-color: blue;
  `,
};

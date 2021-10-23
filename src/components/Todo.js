import React from "react";
import Button from "@atlaskit/button";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";

const ButtonStyle = styled(Button)`
  margin-top: 5px;
  text-align: left;
  position: relative;

  .btn-del {
    border-radius: 5px;
    background-color: red;
    color: white;
    position: absolute;
    right: 0px;
    top: 7px;
    padding: 2px 4px;
    margin-right: 5px;
    display: none;
  }

  &:hover {
    .check-icon {
      display: inline-block;
    }
    .btn-del {
      display: inline-block;
    }
  }

  .check-icon {
    display: none;
    margin-right: 30px;
  }
`;

export default function Todo({ todo, btnAdd, btnDeleteTodo }) {
  return (
    <>
      <ButtonStyle
        shouldFitContainer
        iconAfter={
          <span className="check-icon">
            <CheckIcon onCLick={() => btnAdd(todo.id)} primaryColor="#4fff4f" />
          </span>
        }
      >
        {todo.name}
        <button className="btn-del" onClick={() => btnDeleteTodo(todo.id)}>
          Del
        </button>
      </ButtonStyle>
    </>
  );
}

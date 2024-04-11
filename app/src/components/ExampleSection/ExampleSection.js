import React from 'react'

import { ToggleButton } from "../ToggleButton/ToggleButton"
import { SecretList } from "../SecretList/SecretList"
import { useToggle } from "../../hooks/useToggle"

export const ExampleSection = () => {
  const [toggle, setToggle] = useToggle(false);

  return (
    <>
      <ToggleButton
        toggle={toggle}
        setToggle={setToggle}
      />
      {toggle &&
        <SecretList />
      }
    </>
  )
}

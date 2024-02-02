

/** @jsxImportSource @emotion/react */

import { Fragment, useCallback, useContext } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Alert, AlertIcon, AlertTitle, Box, Button, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { DebounceInput } from "react-debounce-input"
import { Event, set_val } from "/utils/state"
import NextHead from "next/head"



export function Debounceinput_4e30ce28e2160490957dd781ff3a723a () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__binary_to_decimal = useContext(StateContexts.state__binary_to_decimal)

  const on_change_cd2bd83696dd1589628d9781308e87a7 = useCallback((_e0) => addEvents([Event("state.binary_to_decimal.update_num", {new_num:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} onChange={on_change_cd2bd83696dd1589628d9781308e87a7} placeholder={`enter number in 0,1`} type={`text`} value={state__binary_to_decimal.num}/>
  )
}

export function Button_78de4cfd2765e74d95cb7a76fc9ad3fd () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_5b4ad2fa41e72a5457ed5df21fe1daee = useCallback((_e) => addEvents([Event("state.binary_to_decimal.binary_to_dec", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_5b4ad2fa41e72a5457ed5df21fe1daee}>
  {`convert`}
</Button>
  )
}

export function Text_ceb0068c202f0eec29bc7195cbfcb0e1 () {
  const state__binary_to_decimal = useContext(StateContexts.state__binary_to_decimal)


  return (
    <Text sx={{"width": "8vw"}}>
  {`decimal: ${state__binary_to_decimal.decimal}`}
</Text>
  )
}

export function Alerttitle_2bfa38516aa36898f663f1e71bb575dd () {
  const state__binary_to_decimal = useContext(StateContexts.state__binary_to_decimal)


  return (
    <AlertTitle>
  {state__binary_to_decimal.alert_message}
</AlertTitle>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <Box>
  <Fragment>
  <VStack>
  <Alert>
  <AlertIcon/>
  <Alerttitle_2bfa38516aa36898f663f1e71bb575dd/>
</Alert>
</VStack>
  <VStack sx={{"border": "1px solid black", "width": "50%", "margin": "auto", "marginTop": "5vh", "paddingTop": "3vh", "paddingBottom": "3vh"}}>
  <Heading>
  {`welcome to Binary to dexcimal convertor`}
</Heading>
  <VStack>
  <Debounceinput_4e30ce28e2160490957dd781ff3a723a/>
</VStack>
  <HStack>
  <Text_ceb0068c202f0eec29bc7195cbfcb0e1/>
  <Button_78de4cfd2765e74d95cb7a76fc9ad3fd/>
</HStack>
</VStack>
</Fragment>
</Box>
  <NextHead>
  <title>
  {`Nextpy App`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}

import React, { useState } from 'react';
import { Box, Button, Form, FormField, TextInput } from 'grommet';

interface SetupModel {
  onBegin: Function;
}

export function SimulationSetup(props: SetupModel): JSX.Element {
  const { onBegin } = props;

  const [time, setTime] = useState('');

  return (
    <>
      <Form
        onSubmit={({ value }) => {
          console.log(value);
        }}
      >
        <FormField name="name" label="Time">
          <TextInput
            placeholder="simulation time"
            value={time}
            onChange={(event) => {
              setTime(event.target.value);
            }}
          />
        </FormField>
        <Box direction="row" gap="medium">
          <Button
            type={'submit'}
            size={'large'}
            primary
            label="Submit"
            onClick={() => {
              onBegin(Number(time));
            }}
          />
          <Button type={'reset'} size={'large'} label="Reset" />
        </Box>
      </Form>
    </>
  );
}

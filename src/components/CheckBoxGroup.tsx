import React from 'react';
import { Box, BoxProps, CheckBox, TextInput } from 'grommet';

type Props = BoxProps & {
  options: string[];
  answers: string[];
  setAnswers: (answers: string[]) => void;
  other?: boolean;
};

const CheckBoxGroup: React.FC<Props> = (props) => {
  const { options, answers, setAnswers } = props;

  const [otherAnswer] = answers.filter((answer) => !options.includes(answer));

  return (
    <>
      {options.map((option, index) => (
        <Box style={{ marginLeft: 16 }} key={index} pad="xxsmall">
          <CheckBox
            label={option}
            checked={answers.includes(option)}
            onChange={(event) => {
              const { checked } = event.target;

              if (!checked && answers.includes(option)) {
                setAnswers(answers.filter((answer) => answer !== option));
              } else if (checked && !answers.includes(option)) {
                setAnswers([...answers, option]);
              }
            }}
          />
        </Box>
      ))}
      {props.other && (
        <TextInput
          style={{ marginTop: 16, marginLeft: 16, marginRight: 16, width: 400 }}
          value={otherAnswer || ''}
          placeholder="Other"
          onChange={(event) => {
            const { value } = event.target;

            let answersWithoutOther = answers.filter(
              (answer) => answer !== otherAnswer,
            );

            if (value) {
              setAnswers([...answersWithoutOther, value]);
            } else {
              setAnswers(answersWithoutOther);
            }
          }}
        />
      )}
    </>
  );
};

export default CheckBoxGroup;

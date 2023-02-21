import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const testTags = [
    { tag: 'Short Story', category: 'Film Type' },
    { tag: 'Feature Film', category: 'Film Type' },
    { tag: 'Trailer', category: 'Film Type' },
    { tag: 'Action', category: 'Genre' },
    { tag: 'Horror', category: 'Genre' },
    { tag: 'Romance', category: 'Genre' },
    { tag: 'Adventure', category: 'Genre' },
    ]


export default function Tags() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={testTags}
      disableCloseOnSelect
      getOptionLabel={(option) => option.tag}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.tag}
        </li>
      )}
     
      renderInput={(params) => (
        <TextField {...params} label="Tags"/> 
      )}
      
    />
  );
}
import React from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const FilterList = ({ title, options, handleFilter }) => {
    return (
        <div style={{borderTop: '2px solid #e2e1e1', padding: '12px 0px'}}>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"><strong>{title}</strong></FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                size="small"
            >
                {options.map((option) => (
                        <FormControlLabel
                            key={option.value}
                            value={option.value}
                            control={<Radio size='small' />}
                            label={option.value}
                            onClick={() => handleFilter(option.value)}
                        />
                    ))}
            </RadioGroup>
        </FormControl>
        </div>
    )
}

export default FilterList
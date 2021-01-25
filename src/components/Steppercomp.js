import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Radio,RadioGroup,FormControl,FormControlLabel,FormLabel,FormGroup,Checkbox} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Select packages', 'Choose contact option', 'place the order/query'];
}

function getStepContent(step) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  switch (step) {
    case 0:
      return (<div>
                <FormControl component="fieldset">                                                                                          
                    <FormGroup aria-label="position" >
                      <FormControlLabel                                                                                                                                                                                                                                                                                               
                        value="top"                                                                                                                                                                                                                                           
                        control={<Checkbox color="primary" />}
                        label="Website"
                        labelPlacement="right"
                      />
                      <FormControlLabel
                        value="start"
                        control={<Checkbox color="primary" />}
                        label="Logo,Banner,brochures"
                        labelPlacement="right"
                      />
                      <FormControlLabel
                        value="bottom"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                        control={<Checkbox color="primary" />}
                        label="content writing & Digital Marketting"
                        labelPlacement="right"
                      />
                      <FormControlLabel
                        value="end"
                        control={<Checkbox color="primary" />}
                        label="Hosting & Maintanence"
                        labelPlacement="right                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           "
                      />
                    </FormGroup>
                </FormControl>
            </div>)
    case 1:
      return (<div>
                <FormControl  component="fieldset">
                  <FormLabel  component="legend">Contact method</FormLabel>
                    <RadioGroup aria-label="gender" name="method" /*value={value} onChange={handleChange}*/>
                    <FormControlLabel value="Email" control={<Radio />} label="Email" />
                   <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                   <FormControlLabel value="whatsapp" control={<Radio />} label="whatsapp" />
                   <FormControlLabel value="physical"control={<Radio />} label="Physical meet" />
                </RadioGroup>
              </FormControl>
              </div>)
    case 2:
      return (
        <div>
        </div>
      )
    default:
      return 'Unknown step';
  }
}

export default function Steppercomp() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}

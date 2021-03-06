import React from "react";
import "../../../assets/styles.css";
import analyse from "../../../assets/images/analysis-691.png";

import { Grid } from "@material-ui/core";
function Features() {
  return (
    <Grid container xs={12} className='p-4 features' direction='row'>
      <Grid container sm={6} xs={4} className='p-4'>
        <Grid xs={12} style={{ width: "75%", height: "75%", zIndex: "1" }}>
          <img src={analyse} alt='PIC' width='100%' />
        </Grid>
      </Grid>
      <Grid container xs={8} sm={6} className='p-4'>
        <Grid className='section-text'>
          <Grid className='section-text__title'>Features</Grid>

          <Grid className='row'>
            <Grid className='feature-box col-50'>
              <Grid className='section-text__title-small'>
                Breakdown Matches
              </Grid>
              <Grid className='section-text__body'>
                {/* Timestamp matches by scoring. Gather data on setups....{" "} */}
                Some info
              </Grid>
            </Grid>

            <Grid className='feature-box col-50'>
              <Grid className='section-text__title-small'>Statistics</Grid>
              <Grid className='section-text__body'>
                Stats on most utilized technique
                {/* Get Statistics from the top wrestlers. Get stats on your team or
                athletes{" "} */}
              </Grid>
            </Grid>
          </Grid>

          <Grid className='row'>
            <Grid className='feature-box col-50'>
              <Grid className='section-text__title-small'>Database</Grid>
              <Grid className='section-text__body'>
                Watch clips and filter different scores{" "}
              </Grid>
            </Grid>

            <Grid className='feature-box col-50'>
              <Grid className='section-text__title-small'>Something Cool</Grid>
              <Grid className='section-text__body'>
                Aorem psum olorsit amet ectetur adipiscing elit, sed dov.
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Features;

import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import {
  DetailsNav,
  DetailsAccount,
  DetailsDownload,
  DetailsInquiry,
  DetailsPrice,
  DetailsQRcode,
  DetailsStore,
  DetailsUsage
} from "../components/";

function Details(props) {
  const { owner } = props.data[0];
  return (
    <div className="flex">
      <DetailsNav owner={owner} />
      <div className="details-content-area ml-4">
        <Switch>
          <Route exact path="/details">
            <DetailsStore />
          </Route>
          <Route path="/details/inquiry">
            <DetailsInquiry />
          </Route>
          <Route path="/details/account">
            <DetailsAccount />
          </Route>
          <Route path="/details/qrcode">
            <DetailsQRcode />
          </Route>
          <Route path="/details/download">
            <DetailsDownload />
          </Route>
          <Route path="/details/usage">
            <DetailsUsage />
          </Route>
          <Route path="/details/price">
            <DetailsPrice />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Details;

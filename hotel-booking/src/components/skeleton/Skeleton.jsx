import React from "react";
import "./skeleton.css";
import { CircularProgress } from "@material-ui/core";

export default function Skeleton({ type }) {
  const COUNTER = 3;
  const FeedSkeleton = () => (
    <div className="skSearchItem">
      <div className="skImg"></div>
      <div className="skDesc">
        <div className="skTitle"> </div>
        <div className="skDistance"> </div>
        <div className="skTaxiOp"> </div>
        <div className="skSubtitle"></div>
        <div className="skFeatures"> </div>
        <div className="skCancelOp"> </div>
        <div className="skCancelOpSubtitle"></div>
      </div>
      <div className="skDetails">
        <div className="skRating">
          <div></div>
          <button> </button>
        </div>

        <div className="skDetailTexts">
          <div className="skPrice"> </div>
          <div className="skTaxOp"> </div>

          <button className="skCheckButton"> </button>
        </div>
      </div>
    </div>
  );

  const FeaturedList = () => (
    <div className="skfeaturedItem">
      <div className="skfeaturedImg"></div>
      <div className="skfeaturedTitles">
        <div className="sktitle"> </div>
        <div className="sktitle"></div>
      </div>
    </div>
  );

  const MenuSkeleton = () => (
    <div className="menuSk">
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
      <div className="menuSkItem"></div>
    </div>
  );

  const CustomLoading = () => (
    <div className="custom">
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <span className="customText">Loading...</span>
    </div>
  );
  const Circle = () => (
    <div className="circle">
      <CircularProgress />
    </div>
  );

  if (type === "feed") return Array(COUNTER).fill(<FeedSkeleton />);
  if (type === "circle") return <Circle />;
  if (type === "list") return Array(COUNTER).fill(<FeaturedList />);
}

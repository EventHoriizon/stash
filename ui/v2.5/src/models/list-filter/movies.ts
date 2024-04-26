import {
  createStringCriterionOption,
  createDateCriterionOption,
  createMandatoryTimestampCriterionOption,
  createDurationCriterionOption,
  createMandatoryNumberCriterionOption,
} from "./criteria/criterion";
import { MovieIsMissingCriterionOption } from "./criteria/is-missing";
import { StudiosCriterionOption } from "./criteria/studios";
import { PerformersCriterionOption } from "./criteria/performers";
import { ListFilterOptions } from "./filter-options";
import { DisplayMode } from "./types";
import { RatingCriterionOption } from "./criteria/rating";

const defaultSortBy = "name";

const sortByOptions = ["name", "random", "date", "duration", "rating"]
  .map(ListFilterOptions.createSortBy)
  .concat([
    {
      messageID: "scene_count",
      value: "scenes_count",
    },
    {
      messageID: "o_count",
      value: "o_counter",
    },
  ]);
const displayModeOptions = [DisplayMode.Grid];
const criterionOptions = [
  StudiosCriterionOption,
  MovieIsMissingCriterionOption,
  createStringCriterionOption("url"),
  createStringCriterionOption("name"),
  createStringCriterionOption("director"),
  createStringCriterionOption("synopsis"),
  createDurationCriterionOption("duration"),
  RatingCriterionOption,
  PerformersCriterionOption,
  createDateCriterionOption("date"),
  createMandatoryNumberCriterionOption("o_counter", "o_count"),
  createMandatoryTimestampCriterionOption("created_at"),
  createMandatoryTimestampCriterionOption("updated_at"),
];

export const MovieListFilterOptions = new ListFilterOptions(
  defaultSortBy,
  sortByOptions,
  displayModeOptions,
  criterionOptions
);

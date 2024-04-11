import React from "react";
import s from "./page.module.css";
import getDashboardData from "./getDashboardData";
import ScrollDisplay from "../../components/ScrollDisplay";
import { Episode, Pod } from "../../types/models";
import Title from "../../components/common/Title";

type DashboardData = {
  popularWithFriends: {
    pods: Pod[];
    episodes: Episode[];
  };
  recentlyViewed: {
    episodes: Episode[];
    pods: Pod[];
  };
  popularWithAll: {
    pods: Pod[];
    episodes: Episode[];
  };
};

export default async function Dashboard() {
  const data: DashboardData = await getDashboardData();

  const sections = [
    {
      title: "Most Popular Podcasts",
      condition: !!data.popularWithAll?.pods?.length,
      data: data.popularWithAll.pods,
    },
    {
      title: "Most Popular Episodes",
      condition: !!data.popularWithAll?.episodes?.length,
      data: data.popularWithAll.episodes,
    },
    {
      title: "Recently Viewed Podcasts",
      condition: !!data.recentlyViewed?.pods?.length,
      data: data.recentlyViewed.pods,
    },
    {
      title: "Recently Viewed Episodes",
      condition: !!data.recentlyViewed?.episodes?.length,
      data: data.recentlyViewed.episodes,
    },
    {
      title: "Popular Podcasts With Friends",
      condition: !!data.popularWithFriends?.pods?.length,
      data: data.popularWithFriends?.pods,
    },
    {
      title: "Popular Episodes With Friends",
      condition: !!data.popularWithFriends?.episodes?.length,
      data: data.popularWithFriends?.episodes,
    },
  ];

  return (
    <div className={s.container}>
      {sections.map(
        (section, index) =>
          section.condition && (
            <React.Fragment key={index}>
              <Title>{section.title}</Title>
              <ScrollDisplay pods={section.data} />
            </React.Fragment>
          )
      )}
    </div>
  );
}

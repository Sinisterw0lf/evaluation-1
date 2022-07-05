import React from "react";
import Layout from "../components/layouts/Layout";
import SkillDescription from "../components/SkillPage/SkillDescription";
import SkillProgress from "../components/SkillPage/SkillProgress";
import SkillTitle from "../components/SkillPage/SkillTitle";

export default function Skills() {
  return (
    <Layout>
      <div className="bg-accent-lightest">
        <SkillTitle />
        <SkillDescription/>
        <SkillProgress/>
      </div>
    </Layout>
  );
}

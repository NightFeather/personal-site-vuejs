<template>
  <article id="ability" class="region">
    <header>能力</header>
    <section>
      <skillbar-group v-for="skillgroup in skill_list" v-bind:skillgroup="skillgroup" ></skillbar-group>
    </section>
  </article>
</template>

<script>
import SkillData from '@/data/skill-data.json'
import SkillbarGroup from '@/components/SkillbarGroup'

export default {
  name: 'content-ability',
  components: { SkillbarGroup },
  data: function () {
    return {
      skill_list: SkillData
    }
  }
}
</script>

<style lang='scss'>
  #ability {
    background-color: #5a5;
    min-height: 80vh;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
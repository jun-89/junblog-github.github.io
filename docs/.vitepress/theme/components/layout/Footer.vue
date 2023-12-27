<template>
  <footer class="VPFooter">
    <div class="container">
      <p v-if="theme.footerConfig.icpRecordCode" class="recordCode">
        <span class="icon">
          <img src="/img/beian.png" title="ICP备案号">
        </span>
        <span class="content">
          <a href="https://beian.miit.gov.cn" target="_blank">{{ theme.footerConfig.icpRecordCode }}</a>
        </span>
      </p>
      <p v-if="theme.footerConfig.publicSecurityRecordCode" class="recordCode">
        <span class="icon">
          <img src="/img/gongan.png" title="联网备案号">
        </span>
        <span class="content">
          <a :href="'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=' + theme.footerConfig.publicSecurityRecordCode.replace('号', '').substring(theme.footerConfig.publicSecurityRecordCode.indexOf('备') + 1)" target="_blank">{{ theme.footerConfig.publicSecurityRecordCode }}</a>
        </span>
      </p>
      <p v-if="theme.footerConfig.copyright" class="copyright" v-html="theme.footerConfig.copyright"></p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
  import { useData } from 'vitepress';
  const { theme } = useData();
</script>

<style scoped>
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 25px 24px;
  background-color: var(--vp-c-bg);
}
.VPFooter.has-sidebar {
  display: none;
}
a:hover {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}
@media (min-width: 768px) {
  .VPFooter {
    padding: 25px;
  }
}
.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}
.recordCode,
.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
.recordCode   { order: 2; }
.copyright { order: 1; }

p {
  margin: 0;
}
.recordCode span {
  display: inline-block;
}
.recordCode span:not(:last-child) {
  margin-right: .175rem;
}
.recordCode .icon svg {
  height: 16px;
  width: 16px;
  /*fill: var(--vp-c-text-2);*/
  fill: #5791ED;
  position: relative;
  top: 3px;
}
.recordCode .icon img {
  height: 14px;
  width: 14px;
  position: relative;
  top: 2px;
}
</style> 
import{a1 as o}from"./entry.589ac7c5.js";const c=()=>{const e=t=>s=>{const r=o("/api/_github",t,`${n(s)||"index"}.json`);return $fetch(r,{responseType:"json"})};return{fetchRepository:e("repository"),fetchReleases:e("releases"),fetchRelease:e("releases"),fetchLastRelease:t=>e("releases")({...t,last:!0}),fetchContributors:e("contributors"),fetchFileContributors:e("contributors/file"),fetchReadme:e("readme"),fetchCommits:e("commits")}};function n(e){return Object.entries(e).map(([t,s])=>`${t}_${String(s)}`).join(":")}export{c as u};

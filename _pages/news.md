---
layout: archive
title: "News"
permalink: /news/
author_profile: true
---

{% assign news_items = site.data.news %}

<table style="border-collapse: collapse; border:none; font-size:18px;">
    {% for item in news_items %}
        <tr>
            <td style="width:20%; border: none; vertical-align:top;">
                <b>{{ item.date }}</b>
            </td>
            <td style="width:80%; border: none; vertical-align:top;">
                {{ item.news }}
            </td>
        </tr>
    {% endfor %}
  <!-- <tr>
    <td style="width:20%; border: none; vertical-align:top;">
      <b>Dec 09, 2024</b>
    </td>
    <td style="width:80%; border: none; vertical-align:top;">
      Attending NeurIPS 2024 to present <a href="https://arxiv.org/abs/2406.09948">BLEnD</a> as a poster 🇨🇦
    </td>
  </tr>
  <tr>
    <td style="width:20%; border: none; vertical-align:top;">
      <b>Sep 05, 2024</b>
    </td>
    <td style="width:80%; border: none; vertical-align:top;">
      <a href="https://www.isca-archive.org/interspeech_2024/kim24v_interspeech.pdf">LearnerVoice</a> was shortlisted for the Best Student Paper Award at Interspeech 2024! 🏆
    </td>
  </tr>
  <tr>
    <td style="width:20%; border: none; vertical-align:top;">
      <b>Aug 16, 2024</b>
    </td>
    <td style="width:80%; border: none; vertical-align:top;">
      <a href="https://arxiv.org/abs/2406.09948">BLEnD</a> received the best paper award at the <a href="https://sites.google.com/view/c3nlp">C3NLP workshop</a> @ ACL 2024! 🏆
    </td>
  </tr>
  <tr>
    <td style="width:20%; border: none; vertical-align:top;">
      <b>Aug 11, 2024</b>
    </td>
    <td style="width:80%; border: none; vertical-align:top;">
      Attending ACL 2024 to present <a href="https://arxiv.org/abs/2406.09948">BLEnD</a> at the <a href="https://sites.google.com/view/c3nlp">C3NLP workshop</a> 🇹🇭
    </td>
  </tr>
  <tr>
    <td style="width:20%; border: none; vertical-align:top;">
      <b>Jun 21, 2024</b>
    </td>
    <td style="width:80%; border: none; vertical-align:top;">
      <a href="https://arxiv.org/abs/2308.16705">CREHate</a> received the resource award at NAACL 2024! 🏆
    </td>
  </tr>
  <tr>
    <td style="width:20%; border: none; vertical-align:top;">
      <b>Jul 20, 2023</b>
    </td>
    <td style="width:80%; border: none; vertical-align:top;">
      Attending L@S 2023 to present <a href="https://dl.acm.org/doi/abs/10.1145/3573051.3596200">RECIPE</a> as a WiP poster 🇩🇰
    </td>
  </tr> -->
</table>
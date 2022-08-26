<template lang="">
  <section>
    <h1>404</h1>
    <h2>Oops! Halaman ini tidak dapat ditemukan</h2>
    <h4>Mohon maaf, tetapi halaman yang anda cari tidak ada</h4>
    <base-button :link="true" :mode="'btn-default'">KEMBALI KE BERANDA</base-button>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 100px 0;
  text-align: center;
  h1 {
    margin: 0;
    font-size: 150px;
    font-family: "Roboto Bold";
    font-weight: bold;
    color: #093eb6;
    line-height: 1;
  }
  h2 {
    font-size: 40px;
    margin: 0 0 10px;
    font-weight: 600;
  }
  h4 {
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 21px;
  }
}
</style>

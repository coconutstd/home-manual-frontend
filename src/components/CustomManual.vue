<template>
  <div>
    <span>모음집 1</span>
    <div class="row">
      <div class="col">
        <div class="card card-group" style="width:600px; background-color: #8fcafe">
          <div class="card-body">
            <div class="card" style="width:300px">
              <div class="card-body">
                <h2>SL-M5370LX</h2>
                <h1>프린터</h1>
                <button type="button" class="btn btn-danger">-</button>
              </div>
            </div>
            <div class="card" style="width:300px">
              <div class="card-body">
                <h2>KQ65QT800A-S</h2>
                <h1>TV</h1>
                <button type="button" class="btn btn-danger">-</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div>
          <span>그룹추가</span>
          <button type="button" class="btn btn-info">+</button>
        </div>
        <div>
          <form method="get" action="">
            <button type="submit" class="btn btn-info"><i class="fas fa-search"></i></button>
            <input type="text"/>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomManual"
}
</script>

<style scoped>

</style>

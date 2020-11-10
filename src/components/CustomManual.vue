<template>
  <div>
    <div class="container my-2 ">
      <div class="row">
        <div class="col-12 col-md-7">
          <span>모음집 1</span>
          <div class="card card-group">
            <div class="card-body">
              <div class="card">
                <div class="card-body">
                  <h2>SL-M5370LX</h2>
                  <h1>프린터</h1>
                  <button type="button" class="btn btn-danger">-</button>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <h2>KQ65QT800A-S</h2>
                  <h1>TV</h1>
                  <button type="button" class="btn btn-danger">-</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5 my-2 input-group">
          <div>
            <span>그룹추가</span>
            <button type="button" class="btn btn-info">+</button>
            <form method="get" action="">
              <button type="submit" @click.prevent="" class="btn btn-info"><i class="fas fa-search"></i></button>
              <input type="text"/>
            </form>
          </div>
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

.input-group{
  display: flex;
}

.input-group form{
  display: block;
  margin-top: 10px;
  width: 100%;
}

.input-group input{
 border: solid 1px white;
  border-radius: 4px;
  height: 33px;
}


</style>

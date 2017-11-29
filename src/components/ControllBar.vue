<template>
    <div class="controll-bar">
        <div class="card">
            <div class="card-content">
                <p class="range-field">
                    <input type="range" min="0" max="100" />
                </p>
                <span class="card-title"> title </span>
                <button class="btn-flat">
                    <i class="material-icons">skip_previous</i>
                </button>
                <button class="btn-flat">
                    <i class="material-icons">play_arrow</i>
                    <!-- <i class="material-icons">pause</i> -->
                </button>
                <button class="btn-flat">
                    <i class="material-icons">skip_next</i>
                </button>

                <div class="right">
                    <button class="btn-flat btn-w-min active">
                        <i class="material-icons">repeat</i>
                    </button>
                    <button class="btn-flat btn-w-min">
                        <i class="material-icons">shuffle</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ControllBar',
    data() {
        return {};
    }
};
</script>


<style lang="scss">
.controll-bar {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0 -1px 8px 1px rgba(22,22,22,.4);
}
.card {
    margin: 0;
}
.card .card-content {
    padding: 4px 24px;
    border-radius: 0;
}
.btn-flat {
    padding: 0 1.2rem;
}
.btn-w-min {
    padding-right: .2rem;
    padding-left: .2rem;
}
#app .btn-flat *
{
    color: #a2a2a2;
}
#app .btn-flat.active *
{
    color: #26a59a;
}
</style>

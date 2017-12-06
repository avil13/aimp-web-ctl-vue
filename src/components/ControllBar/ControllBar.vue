<template>
    <div class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col s12 control-bar">
                    <div class="range-field">
                        <input type="range" min="0" max="100" />
                    </div>
                    <div class="volume-field">
                        <div class="card-title">1 Eric Clapton - Travelin Alone</div>
                        <volume-component></volume-component>
                    </div>
                    <button role="button" class="btn-flat">
                        <i class="material-icons">skip_previous</i>
                    </button>
                    <button role="button" class="btn-flat">
                        <i class="material-icons">play_arrow</i>
                        <!-- <i class="material-icons">pause</i> -->
                    </button>
                    <button role="button" class="btn-flat">
                        <i class="material-icons">skip_next</i>
                    </button>

                    <div class="right">
                        <button role="button" class="btn-flat btn-w-min active">
                            <i class="material-icons">repeat</i>
                        </button>
                        <button role="button" class="btn-flat btn-w-min">
                            <i class="material-icons">shuffle</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import VolumeComponent from './Volume.vue';

    export default {
        name: 'ControllBar',
        components: {
            VolumeComponent
        }
    };
</script>


<style lang="scss">
    .page-footer {
        background-color: #fff;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, .29);
        height: 130px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding-top: 0;
    }

    .btn-flat {
        padding: 0 1.2rem;
    }

    .btn-w-min {
        padding-right: .2rem;
        padding-left: .2rem;
    }

    #app .btn-flat * {
        color: #a2a2a2;
    }

    #app .btn-flat.active * {
        color: #26a59a;
    }

    .volume-field {
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .card-title {
        font-size: 15px;
        color: #000;
    }

    .btn-flat:first-of-type {
        padding-left: 0;
    }

    .row .col.control-bar {
        padding: 0 26px;
    }
</style>

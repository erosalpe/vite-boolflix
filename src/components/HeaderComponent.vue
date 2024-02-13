<script>
    export default {
        name: "HeaderComponent"
    }
</script>


<template>
    <header class="d-flex justify-content-between p-3 align-items-center">
        <div>
            <h1>Logo</h1>
        </div>
        <div>
            <div>
                <input type="search" name="title" id="boolFlixSearch" placeholder="Search">
                <button>
                    <svg width="20" height="20" viewBox="0 0 25 25">
                        <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                     </svg>
                </button>
            </div>
        </div>
    </header>
</template>








<style lang="scss" scoped>
    header{
        background-color: black;
        div{
            h1{
                color: white;
            }
            div{
                position: relative;
                input::placeholder{
                    position: absolute;
                    left: 30px;
                }
                input{
                    padding-left: 30px;
                }
                button{
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    border: none;
                    background-color: transparent;
                }
            }
        }
    }
</style>

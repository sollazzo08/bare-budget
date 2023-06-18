<script>
    import SignIn from "./signIn.svelte";
    import SignUp from "./signUp.svelte";

</script>
    
    <div class="container mx-auto my-20 main-container flex">
        <div class="container left-content m-3 flex flex-col justify-evenly">
            <div class="text-container  mx-10 flex flex-col justify-between">
                <div class="main-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </div>
                <div class="sub-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dolorum rerum quis cumque! Sapiente totam nam, soluta iusto porro natus perferendis quis obcaecati, neque velit non unde perspiciatis assumenda atque?
                </div>
            </div>
            <div class="card-container mx-10 flex flex-col p-8">
                <div class="main-text2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit possimus veritatis dolorum. Laudantium possimus maxime beatae dolore, repudiandae
                </div>
                <div class="sub-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dolorum rerum quis cumque! Sapiente totam nam, soluta iusto porro natus perferendis quis obcaecati, neque velit non unde perspiciatis assumenda atque?
                </div>
            </div>
        </div>
        <div class="container auth-section">
            <SignUp />
        </div>
    </div>
    
    <style lang="postcss">
        .main-container {
            height: 80vh;
            width: 50%;
            border-radius: 12px;
            background-color: rgb(255, 255, 255)
        }
        .text-container {
            height: 150px;
        }
        .card-container {
            background-color: rgba(35, 36, 70, 0.919);
            border-radius: 12px;
      
        }
        .main-text {
            color: black;
            font-size: 30px;
            font-weight: 600;
        }
        .sub-text {
            color: rgb(175, 175, 175);
        }
        .left-content {

            background-color: rgba(214, 216, 221, 0.685);
            border-radius: 12px;
        }
        .auth-section {
            border-radius: 12px;

        }
    </style>
    

const col2 = document.getElementById("column-2");
const togIcon = document.getElementById("menu-toggle");
const toggleLine = document.querySelectorAll(".toggle-line");
const list = document.querySelectorAll(".ulist .li")

togIcon.addEventListener("click", () => {
    col2.classList.toggle(`max-h-0`);
    col2.classList.toggle(`max-h-96`);
    list.forEach((l, index) => {
        l.style.animationDelay = `${index * 200}ms`;
        l.classList.toggle("animate-fadeIn");
    });

    toggleLine.forEach((line) => {
        line.classList.toggle("bg-base-content")
        line.classList.toggle("tog-ac");
        line.classList.toggle("bg-ac");
    });



});






// footer

const footerDiv = document.createElement("div");


footerDiv.innerHTML = `
    <footer class="footer z-10 flex flex-col justify-between  gap-8 py-10 w-full md:w-full bg-base-300/60 ">


            <div class="flex flex-col gap-20 justify-center items-center w-full">

                <div class="flex flex-col gap-4 w-full md:w-1/4 justify-center items-center text-center">

                    <a href="index.html">

                        <svg xmlns="http://www.w3.org/2000/svg" class="size-10 text-primary"
                            viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ -->
                            <g fill="none" stroke="currentColor" stroke-width="1.5">
                                <path
                                    d="M3 12.833c0-.781 0-1.172.207-1.442q.08-.105.184-.184C3.661 11 4.051 11 4.833 11h14.334c.781 0 1.172 0 1.442.207q.105.08.184.184c.207.27.207.66.207 1.442V13c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13z" />
                                <path
                                    d="M3.5 5.941V4.625A2.625 2.625 0 0 1 6.125 2A4.375 4.375 0 0 1 10.5 6.375V11H6.794V9.236a.824.824 0 0 0-.823-.824A2.47 2.47 0 0 1 3.5 5.942Zm17 0V4.625A2.625 2.625 0 0 0 17.875 2A4.375 4.375 0 0 0 13.5 6.375V11h3.706V9.236c0-.455.369-.824.823-.824a2.47 2.47 0 0 0 2.471-2.47ZM8 11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2"
                                    opacity=".5" />
                            </g>
                        </svg>

                    </a>

                    <p class="desc w-full">
                        Experience next‑gen wireless audio engineered for comfort, clarity, and all‑day performance.
                        Designed for creators, gamers, and everyday listeners who demand more from their sound.
                    </p>

                </div>


                <div class="flex w-full gap-4 flex-col max-w-6xl md:flex-row justify-between items-center text-center">
                    <p class="text-sm w-full md:text-start">
                        copyright-2026 all rights reserved..
                    </p>
                    <p class="text-sm w-full md:text-end">
                        build with love by <a href="https://arshidiqbal.net" class="text-primary">arshiddesigner</a>
                    </p>
                </div>




            </div>



        </footer>`


document.body.insertAdjacentElement("beforeend", footerDiv)






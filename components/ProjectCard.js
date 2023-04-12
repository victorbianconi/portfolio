import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectCard(props) {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -25 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="page__card rounded-3xl"
    >
      {props.svg && <div className="page__card-left">{props.svg}</div>}
      <div className="page__card-right flex-col">
        {props.description && (
          <p className="text-2xl mb-6">{props.description}</p>
        )}
        <div className="flex-col flex w-full align-center">
          {props.toolsUsed && (
            <div className="text-2xl flex flex-col mb-4  border-b-2 pb-5 page__card-section">
              <p className="mb-3 font-medium">Tools used</p>
              <div className="flex items-center">
                {props.toolsUsed.includes("NEXT") && (
                  <div className="mr-3" title="NextJS">
                    <svg
                      width="60"
                      height="28"
                      viewBox="0 0 394 80"
                      className="fill-gold-500"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z" />
                      <path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z" />
                      <path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z" />
                      <path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
                      />
                      <path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z" />
                      <path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z" />
                      <path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z" />
                    </svg>
                  </div>
                )}
                {props.toolsUsed.includes("REACT") && (
                  <div className="mr-3" title="React">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 751 669"
                      fill="none"
                      className="fill-gold-500"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M616.656 216.752C608.667 214.023 600.62 211.481 592.516 209.127C593.859 203.658 595.099 198.158 596.234 192.627C614.516 103.721 602.562 32.0955 561.766 8.51742C522.703 -14.1076 458.641 9.47054 394.016 65.8455C387.661 71.408 381.438 77.1372 375.344 83.033C371.281 79.1164 367.115 75.283 362.844 71.533C295.109 11.2518 227.219 -14.1388 186.469 9.51742C147.406 32.1893 135.797 99.5174 152.25 183.783C153.896 192.116 155.745 200.413 157.797 208.674C148.187 211.408 138.906 214.33 130.031 217.424C50.7188 245.158 0 288.642 0 333.736C0 380.33 54.4375 427.049 137.141 455.377C143.849 457.658 150.62 459.778 157.453 461.736C155.234 470.58 153.271 479.523 151.562 488.564C135.938 571.377 148.125 637.111 187.109 659.642C227.375 682.908 294.922 659.002 360.766 601.346C365.974 596.783 371.182 591.965 376.391 586.892C382.974 593.257 389.745 599.434 396.703 605.424C460.453 660.392 523.406 682.596 562.328 660.002C602.563 636.658 615.641 566.033 598.656 480.111C597.354 473.549 595.854 466.851 594.156 460.017C598.906 458.611 603.557 457.158 608.109 455.658C694.047 427.111 750.031 380.955 750.031 333.783C750 288.471 697.656 244.705 616.656 216.752ZM415.094 90.0643C470.453 41.7674 522.203 22.7049 545.797 36.3299C570.906 50.8455 580.672 109.377 564.891 186.142C563.849 191.142 562.724 196.127 561.516 201.096C528.479 193.581 494.977 188.278 461.234 185.221C441.915 157.39 420.736 130.898 397.844 105.924C403.448 100.486 409.188 95.1997 415.063 90.0643H415.094ZM221.453 372.267C228.234 385.392 235.323 398.356 242.719 411.158C250.25 424.221 258.099 437.09 266.266 449.767C243.048 447.243 219.976 443.525 197.141 438.627C203.766 417.189 211.922 394.924 221.453 372.267ZM221.453 296.752C212.078 274.58 204.141 252.767 197.625 231.705C219.031 226.908 241.844 222.986 265.625 220.017C257.656 232.455 249.99 245.075 242.625 257.877C235.26 270.679 228.187 283.637 221.406 296.752H221.453ZM238.484 334.517C248.359 313.924 258.995 293.726 270.391 273.924C281.776 254.132 293.896 234.793 306.75 215.908C329.063 214.221 351.937 213.33 375.047 213.33C398.156 213.33 421.172 214.221 443.469 215.924C456.188 234.767 468.234 254.038 479.609 273.736C490.984 293.434 501.76 313.538 511.938 334.049C501.896 354.715 491.146 374.997 479.688 394.892C468.323 414.684 456.344 434.08 443.75 453.08C421.484 454.642 398.438 455.502 375 455.502C351.562 455.502 328.953 454.767 307.094 453.346C294.146 434.398 281.927 414.976 270.438 395.08C258.948 375.184 248.281 354.997 238.438 334.517H238.484ZM507.422 410.939C514.974 397.835 522.224 384.559 529.172 371.111C538.696 392.706 547.103 414.777 554.359 437.236C531.256 442.439 507.896 446.428 484.375 449.189C492.312 436.596 499.995 423.846 507.422 410.939ZM528.859 296.767C521.943 283.59 514.75 270.569 507.281 257.705C499.99 245.017 492.391 232.486 484.484 220.111C508.406 223.142 531.359 227.174 552.875 232.096C545.957 254.041 537.942 275.626 528.859 296.767ZM375.359 128.877C390.962 145.925 405.694 163.75 419.5 182.283C389.969 180.877 360.417 180.877 330.844 182.283C345.422 163.002 360.344 145.111 375.359 128.877ZM202.594 37.283C227.688 22.7205 283.172 43.533 341.656 95.5174C345.391 98.8455 349.156 102.33 352.906 105.939C329.896 130.91 308.568 157.379 289.062 185.174C255.395 188.207 221.959 193.427 188.969 200.799C187.063 193.132 185.344 185.413 183.812 177.642C169.672 105.408 179.031 50.9549 202.594 37.283ZM166.016 430.799C159.766 429.017 153.594 427.085 147.5 425.002C110.938 412.502 80.7344 396.189 60 378.424C41.4375 362.502 32.0312 346.611 32.0312 333.736C32.0312 306.377 72.75 271.471 140.656 247.799C149.187 244.83 157.792 242.116 166.469 239.658C176.554 272.069 188.768 303.778 203.031 334.58C188.598 365.807 176.233 397.949 166.016 430.799ZM339.656 577.158C310.547 602.658 281.391 620.736 255.687 629.846C232.594 638.017 214.203 638.252 203.094 631.83C179.437 618.158 169.594 565.361 183.016 494.549C184.609 486.215 186.432 477.882 188.484 469.549C221.805 476.726 255.576 481.628 289.563 484.221C309.259 512.16 330.763 538.779 353.938 563.908C349.281 568.486 344.516 572.892 339.656 577.158ZM376.25 540.877C361.062 524.455 345.906 506.283 331.125 486.752C345.49 487.314 360.115 487.596 375 487.596C390.281 487.596 405.406 487.267 420.312 486.596C406.557 505.426 391.85 523.543 376.25 540.877ZM570.813 585.549C566.344 609.674 557.359 625.767 546.25 632.205C522.609 645.924 472.062 628.096 417.562 581.08C411.312 575.705 405.063 569.939 398.703 563.892C421.426 538.665 442.427 511.938 461.562 483.892C495.737 480.997 529.672 475.75 563.125 468.189C564.656 474.377 566.01 480.439 567.188 486.377C574.703 524.346 575.781 558.689 570.813 585.549ZM598 425.174C593.906 426.533 589.688 427.846 585.406 429.127C574.916 396.563 562.226 364.75 547.422 333.908C561.67 303.477 573.864 272.126 583.922 240.064C591.594 242.299 599.047 244.642 606.219 247.127C675.625 271.064 717.969 306.502 717.969 333.736C717.969 362.799 672.234 400.517 598 425.174Z" />
                      <path d="M375 400.861C388.298 400.904 401.309 397.001 412.387 389.644C423.465 382.288 432.11 371.81 437.229 359.537C442.348 347.264 443.71 333.748 441.142 320.7C438.574 307.653 432.193 295.661 422.805 286.243C413.417 276.824 401.446 270.404 388.407 267.793C375.368 265.183 361.848 266.501 349.558 271.58C337.268 276.658 326.762 285.27 319.37 296.323C311.978 307.377 308.031 320.376 308.031 333.674C308.013 342.483 309.731 351.211 313.087 359.356C316.443 367.502 321.372 374.906 327.592 381.146C333.811 387.386 341.199 392.339 349.334 395.721C357.469 399.104 366.19 400.851 375 400.861Z" />
                    </svg>
                  </div>
                )}

                {props.toolsUsed.includes("SASS") && (
                  <div className="mr-3" title="SASS (CSS)">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 990 743"
                      className="fill-gold-500"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_206_6)">
                        <path d="M851.941 426.838C817.33 427.034 787.359 435.352 762.223 447.737C752.941 429.356 743.66 413.294 742.115 401.3C740.375 387.368 738.248 378.853 740.375 362.215C742.5 345.573 752.168 321.967 752.168 320.032C751.973 318.291 750.039 309.777 730.125 309.584C710.211 309.39 693 313.453 691.066 318.678C689.133 323.902 685.266 335.898 682.752 348.282C679.272 366.47 642.92 430.902 622.23 464.762C615.463 451.605 609.662 439.996 608.5 430.706C606.762 416.777 604.633 408.261 606.762 391.623C608.889 374.981 618.557 351.377 618.557 349.442C618.363 347.701 616.43 339.187 596.516 338.994C576.598 338.801 559.391 342.864 557.457 348.088C555.523 353.312 553.396 365.696 549.143 377.692C545.08 389.688 496.74 497.269 484.172 525.325C477.791 539.643 472.186 551.059 468.123 558.798C464.063 566.538 467.93 559.379 467.543 560.153C464.063 566.731 462.129 570.408 462.129 570.408V570.603C459.422 575.44 456.521 580.082 455.166 580.082C454.199 580.082 452.266 567.118 455.553 549.319C462.707 511.974 480.109 453.735 479.918 451.607C479.918 450.639 483.203 440.383 468.701 435.16C454.586 429.936 449.561 438.643 448.398 438.643C447.238 438.643 446.272 441.739 446.272 441.739C446.272 441.739 461.934 376.148 416.301 376.148C387.684 376.148 348.238 407.3 328.709 435.743C316.334 442.515 290.037 456.831 262.193 472.119C251.559 477.923 240.537 484.115 230.096 489.726L227.971 487.401C172.67 428.386 70.3828 386.592 74.6367 307.262C76.1836 278.432 86.2383 202.39 271.092 110.289C422.492 34.8284 543.729 55.5318 564.803 101.582C594.773 167.369 500.027 289.654 342.635 307.262C282.693 314.034 251.174 290.815 243.248 282.108C234.934 273.014 233.773 272.627 230.68 274.368C225.652 277.077 228.746 285.204 230.68 290.041C235.32 302.231 254.656 323.902 287.527 334.737C316.336 344.218 386.721 349.442 471.799 316.549C567.125 279.593 641.568 177.043 619.719 91.3274C597.482 4.06355 452.85 -24.5729 316.145 23.993C234.738 53.0164 146.566 98.293 83.1445 157.694C7.73439 228.124 -4.25389 289.654 0.773453 315.195C18.3711 406.328 143.859 465.73 194.133 509.652C191.619 511.004 189.299 512.359 187.172 513.522C162.035 525.903 66.3223 576.019 42.3457 629.033C15.2754 689.015 46.5996 732.165 67.4824 737.97C132.064 755.964 198.193 723.651 233.965 670.442C269.541 617.232 265.289 548.156 248.854 516.617L248.272 515.457L267.994 503.847C280.758 496.301 293.326 489.335 304.346 483.335C298.16 500.169 293.711 520.098 291.393 549.122C288.686 583.178 302.607 627.292 320.977 644.706C329.098 652.25 338.766 652.445 344.76 652.445C366.029 652.445 375.697 634.836 386.332 613.747C399.48 588.013 411.082 558.216 411.082 558.216C411.082 558.216 396.58 638.901 436.219 638.901C450.721 638.901 465.223 620.132 471.797 610.458V610.651C471.797 610.651 472.184 610.071 472.957 608.717C473.768 607.516 474.542 606.291 475.277 605.042V604.655C481.078 594.594 494.033 571.569 513.369 533.451C538.311 484.305 562.289 422.775 562.289 422.775C562.289 422.775 564.609 437.867 571.764 462.634C576.016 477.341 585.297 493.399 592.451 509.071C586.65 517.198 583.17 521.844 583.17 521.844L583.363 522.037C578.725 528.229 573.502 534.809 568.09 541.386C548.367 564.992 524.777 591.889 521.684 599.628C518.01 608.72 518.783 615.493 525.938 620.912C531.158 624.782 540.439 625.554 550.301 624.782C568.09 623.619 580.465 619.171 586.652 616.46C596.32 612.977 607.342 607.753 617.977 600.013C637.313 585.697 649.107 565.381 647.947 538.292C647.367 523.393 642.533 508.688 636.539 494.757C638.279 492.242 640.021 489.724 641.76 487.017C672.311 442.319 695.9 393.175 695.9 393.175C695.9 393.175 698.221 408.267 705.375 433.034C709.047 445.611 716.396 459.35 722.971 472.895C694.354 496.307 676.371 523.395 670.184 541.196C658.775 574.09 667.67 588.988 684.492 592.471C692.031 594.019 702.861 590.536 710.981 587.054C721.035 583.764 733.217 578.151 744.434 569.833C763.77 555.515 782.332 535.585 781.365 508.69C780.785 496.307 777.498 484.117 773.051 472.508C797.414 462.446 828.93 456.641 868.957 461.479C955.002 471.54 972.018 525.33 968.732 547.775C965.445 570.222 947.463 582.603 941.467 586.473C935.473 590.149 933.539 591.506 934.119 594.213C934.893 598.278 937.6 598.082 942.82 597.31C949.975 596.148 988.066 578.929 989.613 537.524C991.934 484.307 941.467 426.26 851.941 426.838ZM188.332 650.706C159.908 681.858 119.883 693.66 102.867 683.599C84.4981 672.957 91.6504 627.1 126.65 594.013C147.92 573.89 175.57 555.315 193.746 543.9C197.807 541.384 203.994 537.71 211.342 533.258C212.502 532.486 213.275 532.097 213.275 532.097C214.629 531.323 216.176 530.355 217.723 529.388C230.678 576.599 218.303 618.006 188.332 650.706ZM396.193 509.265C386.332 533.451 365.449 595.561 352.881 592.078C342.051 589.176 335.479 542.158 350.752 495.721C358.486 472.306 374.922 444.446 384.59 433.608C400.254 416.194 417.268 410.39 421.523 417.549C426.551 426.838 402.381 494.173 396.193 509.265ZM567.703 591.304C563.449 593.435 559.582 594.981 557.842 593.822C556.488 593.048 559.58 590.145 559.58 590.145C559.58 590.145 581.043 567.12 589.551 556.478C594.385 550.289 600.186 543.129 606.373 535.001V537.323C606.375 565.183 579.691 583.758 567.703 591.304ZM699.959 561.12C696.865 558.798 697.254 551.639 707.693 529.194C711.756 520.294 721.035 505.395 737.084 491.27C739.018 497.075 740.18 502.684 739.984 507.91C739.793 542.739 715.043 555.702 699.959 561.12Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_206_6">
                          <rect width="990" height="743" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                )}
                {props.toolsUsed.includes("FRAMER_MOTION") && (
                  <div className="mr-3" title="Framer Motion">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 551 551"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_208_8)">
                        <path
                          d="M551 0V275.5L413.25 413.25L275.5 551L137.75 413.25L275.5 275.5L551 0Z"
                          fill="#59529D"
                          className="fill-gold-500"
                        />
                        <path
                          d="M551 275.5V551L413.25 413.25L551 275.5Z"
                          fill="#5271B4"
                        />
                        <path
                          d="M275.5 275.5L137.75 413.25L0 551V0L137.75 137.75L275.5 275.5Z"
                          fill="#BB4B96"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_208_8">
                          <rect width="551" height="551" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                )}
                {props.toolsUsed.includes("AWS") && (
                  <div title="Amazon Web Services">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 304 182"
                      className="fill-gold-500"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M86.4001 66.3996C86.4001 70.0996 86.8001 73.0996 87.5001 75.2996C88.3001 77.4996 89.3001 79.8996 90.7001 82.4996C91.2001 83.2996 91.4001 84.0996 91.4001 84.7996C91.4001 85.7996 90.8001 86.7996 89.5001 87.7996L83.2001 91.9996C82.3001 92.5996 81.4001 92.8996 80.6001 92.8996C79.6001 92.8996 78.6001 92.3996 77.6001 91.4996C76.2001 89.9996 75.0001 88.3996 74.0001 86.7996C73.0001 85.0996 72.0001 83.1996 70.9001 80.8996C63.1001 90.0996 53.3001 94.6996 41.5001 94.6996C33.1001 94.6996 26.4001 92.2996 21.5001 87.4996C16.6001 82.6996 14.1001 76.2996 14.1001 68.2996C14.1001 59.7996 17.1001 52.8996 23.2001 47.6996C29.3001 42.4996 37.4001 39.8996 47.7001 39.8996C51.1001 39.8996 54.6001 40.1996 58.3001 40.6996C62.0001 41.1996 65.8001 41.9996 69.8001 42.8996V35.5996C69.8001 27.9996 68.2001 22.6996 65.1001 19.5996C61.9001 16.4996 56.5001 14.9996 48.8001 14.9996C45.3001 14.9996 41.7001 15.3996 38.0001 16.2996C34.3001 17.1996 30.7001 18.2996 27.2001 19.6996C25.6001 20.3996 24.4001 20.7996 23.7001 20.9996C23.0001 21.1996 22.5001 21.2996 22.1001 21.2996C20.7001 21.2996 20.0001 20.2996 20.0001 18.1996V13.2996C20.0001 11.6996 20.2001 10.4996 20.7001 9.79961C21.2001 9.09961 22.1001 8.39961 23.5001 7.69961C27.0001 5.89961 31.2001 4.39961 36.1001 3.19961C41.0001 1.89961 46.2001 1.29961 51.7001 1.29961C63.6001 1.29961 72.3001 3.99961 77.9001 9.39961C83.4001 14.7996 86.2001 22.9996 86.2001 33.9996V66.3996H86.4001ZM45.8001 81.5996C49.1001 81.5996 52.5001 80.9996 56.1001 79.7996C59.7001 78.5996 62.9001 76.3996 65.6001 73.3996C67.2001 71.4996 68.4001 69.3996 69.0001 66.9996C69.6001 64.5996 70.0001 61.6996 70.0001 58.2996V54.0996C67.1001 53.3996 64.0001 52.7996 60.8001 52.3996C57.6001 51.9996 54.5001 51.7996 51.4001 51.7996C44.7001 51.7996 39.8001 53.0996 36.5001 55.7996C33.2001 58.4996 31.6001 62.2996 31.6001 67.2996C31.6001 71.9996 32.8001 75.4996 35.3001 77.8996C37.7001 80.3996 41.2001 81.5996 45.8001 81.5996ZM126.1 92.3996C124.3 92.3996 123.1 92.0996 122.3 91.3996C121.5 90.7996 120.8 89.3996 120.2 87.4996L96.7001 10.1996C96.1001 8.19961 95.8001 6.89961 95.8001 6.19961C95.8001 4.59961 96.6001 3.69961 98.2001 3.69961H108C109.9 3.69961 111.2 3.99961 111.9 4.69961C112.7 5.29961 113.3 6.69961 113.9 8.59961L130.7 74.7996L146.3 8.59961C146.8 6.59961 147.4 5.29961 148.2 4.69961C149 4.09961 150.4 3.69961 152.2 3.69961H160.2C162.1 3.69961 163.4 3.99961 164.2 4.69961C165 5.29961 165.7 6.69961 166.1 8.59961L181.9 75.5996L199.2 8.59961C199.8 6.59961 200.5 5.29961 201.2 4.69961C202 4.09961 203.3 3.69961 205.1 3.69961H214.4C216 3.69961 216.9 4.49961 216.9 6.19961C216.9 6.69961 216.8 7.19961 216.7 7.79961C216.6 8.39961 216.4 9.19961 216 10.2996L191.9 87.5996C191.3 89.5996 190.6 90.8996 189.8 91.4996C189 92.0996 187.7 92.4996 186 92.4996H177.4C175.5 92.4996 174.2 92.1996 173.4 91.4996C172.6 90.7996 171.9 89.4996 171.5 87.4996L156 22.9996L140.6 87.3996C140.1 89.3996 139.5 90.6996 138.7 91.3996C137.9 92.0996 136.5 92.3996 134.7 92.3996H126.1ZM254.6 95.0996C249.4 95.0996 244.2 94.4996 239.2 93.2996C234.2 92.0996 230.3 90.7996 227.7 89.2996C226.1 88.3996 225 87.3996 224.6 86.4996C224.2 85.5996 224 84.5996 224 83.6996V78.5996C224 76.4996 224.8 75.4996 226.3 75.4996C226.9 75.4996 227.5 75.5996 228.1 75.7996C228.7 75.9996 229.6 76.3996 230.6 76.7996C234 78.2996 237.7 79.4996 241.6 80.2996C245.6 81.0996 249.5 81.4996 253.5 81.4996C259.8 81.4996 264.7 80.3996 268.1 78.1996C271.5 75.9996 273.3 72.7996 273.3 68.6996C273.3 65.8996 272.4 63.5996 270.6 61.6996C268.8 59.7996 265.4 58.0996 260.5 56.4996L246 51.9996C238.7 49.6996 233.3 46.2996 230 41.7996C226.7 37.3996 225 32.4996 225 27.2996C225 23.0996 225.9 19.3996 227.7 16.1996C229.5 12.9996 231.9 10.1996 234.9 7.99961C237.9 5.69961 241.3 3.99961 245.3 2.79961C249.3 1.59961 253.5 1.09961 257.9 1.09961C260.1 1.09961 262.4 1.19961 264.6 1.49961C266.9 1.79961 269 2.19961 271.1 2.59961C273.1 3.09961 275 3.59961 276.8 4.19961C278.6 4.79961 280 5.39961 281 5.99961C282.4 6.79961 283.4 7.59961 284 8.49961C284.6 9.29961 284.9 10.3996 284.9 11.7996V16.4996C284.9 18.5996 284.1 19.6996 282.6 19.6996C281.8 19.6996 280.5 19.2996 278.8 18.4996C273.1 15.8996 266.7 14.5996 259.6 14.5996C253.9 14.5996 249.4 15.4996 246.3 17.3996C243.2 19.2996 241.6 22.1996 241.6 26.2996C241.6 29.0996 242.6 31.4996 244.6 33.3996C246.6 35.2996 250.3 37.1996 255.6 38.8996L269.8 43.3996C277 45.6996 282.2 48.8996 285.3 52.9996C288.4 57.0996 289.9 61.7996 289.9 66.9996C289.9 71.2996 289 75.1996 287.3 78.5996C285.5 81.9996 283.1 84.9996 280 87.3996C276.9 89.8996 273.2 91.6996 268.9 92.9996C264.4 94.3996 259.7 95.0996 254.6 95.0996Z" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M273.5 143.7C240.6 168 192.8 180.9 151.7 180.9C94.1 180.9 42.2 159.6 2.99999 124.2C-0.100014 121.4 2.69999 117.6 6.39999 119.8C48.8 144.4 101.1 159.3 155.2 159.3C191.7 159.3 231.8 151.7 268.7 136.1C274.2 133.6 278.9 139.7 273.5 143.7Z"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M287.2 128.099C283 122.699 259.4 125.499 248.7 126.799C245.5 127.199 245 124.399 247.9 122.299C266.7 109.099 297.6 112.899 301.2 117.299C304.8 121.799 300.2 152.699 282.6 167.499C279.9 169.799 277.3 168.599 278.5 165.599C282.5 155.699 291.4 133.399 287.2 128.099Z"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          )}
          {props.overviewDetails && (
            <div className="text-2xl flex flex-col mb-4 border-b-2 pb-5 page__card-section">
              <p className="mb-3 font-medium">{props.overviewDetails.title}</p>
              <div className="flex center flex-col">
                {props.overviewDetails.list.map((item) => {
                  return (
                    <p key={item} className="text-lg">
                      - {item}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
          <div className="text-2xl flex flex-col pt-4 page__card-section">
            <div className="flex center">
              {props.URLs?.live && (
                <Link
                  href={props.URLs.live.href}
                  target={!props.URLs.live.isRoute ? "_blank" : ""}
                >
                  <button className="text-xl btn btn--primary mr-5">
                    Visit live
                    <svg
                      className="ml-4 fill-body"
                      width="18"
                      height="18"
                      viewBox="0 0 24 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 3H1V21H21V10H22V22H0V2H14V3ZM24 8H23V1.707L11.354 13.354L10.646 12.646L22.293 1H16V0H24V8Z"
                      />
                    </svg>
                  </button>
                </Link>
              )}
              {props.URLs?.overview && (
                <Link
                  href={props.URLs.overview.href}
                  target={!props.URLs.overview.isRoute ? "_blank" : ""}
                >
                  <button className="text-xl btn btn--secondary ">
                    Full overview
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
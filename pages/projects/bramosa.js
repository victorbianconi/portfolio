import ProjectSection from "@/components/ProjectSection";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Bramosa() {
  const sections = [
    {
      title: "Authentication system",
      description:
        "You can fully sign up and authenticate. Refresh and access tokens are used to garner user access.",
      imgSrc: "/images/bramosa/signup.webp",
      imgAlt: "signup",
    },
    {
      title: "Easy booking management",
      description:
        "Creators can easily manage their content requests in one place.",
      imgSrc: "/images/bramosa/booking-management.webp",
      imgAlt: "booking management",
    },
    {
      title: "Chat messaging",
      description:
        "Chat messaging via websockets.",
      imgSrc: "/images/bramosa/chat-messaging.webp",
      imgAlt: "chat messaging",
    },
  ];

  return (
    <>
      <Head>
        <title>Projects | Victor Bianconi</title>
        <meta name="description" content="Projects done." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        key="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="page pointer-events-none p-12"
      >
        <div className="page__main-container">
          <div className="mb-10 flex w-full justify-center align-center">
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                width="199"
                height="31"
                viewBox="0 0 199 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.17163 29.5655L1.14326 29.6223C0.733491 29.6223 0.417967 29.6223 0.221277 29.6223C0.0245863 29.6223 0 29.5858 0 29.4764C0 29.367 0.0737589 29.3103 0.221277 29.3103H0.631048C1.34405 29.3103 1.80299 29.1725 2.01608 28.9051C2.26921 28.4264 2.40931 27.8973 2.42585 27.3573C2.46682 26.9967 2.5119 26.547 2.53649 26.0608C2.56107 25.5746 2.59795 24.9263 2.61024 24.1848C2.61024 23.804 2.61024 23.3461 2.61024 22.8356V13.156C2.61024 11.9162 2.61024 10.9316 2.61024 10.2023C2.61024 9.47298 2.61024 8.84091 2.61024 8.34254C2.63133 7.35477 2.493 6.36999 2.20047 5.42529C1.99149 4.93908 1.49157 4.69598 0.704807 4.69598H0.221277C0.0737589 4.69598 0 4.64331 0 4.53391C0 4.42451 0.0737589 4.36779 0.221277 4.36779C0.368794 4.36779 0.725296 4.36779 1.14326 4.36779C1.56123 4.36779 2.24145 4.39615 3.19212 4.42451C3.82727 4.42451 4.26162 4.46098 4.4829 4.46098H4.91726C4.99102 4.46098 5.2082 4.46098 5.5647 4.46098C5.9212 4.46098 6.62601 4.46098 7.64634 4.46098C8.87565 4.46098 9.69519 4.42046 10.1541 4.40425H11.0024C14.6903 4.40425 17.3634 4.8729 19.0216 5.81021C20.6798 6.74751 21.5062 8.21154 21.5007 10.2023C21.5129 11.0413 21.2992 11.8685 20.8815 12.599C20.4639 13.3295 19.8574 13.937 19.124 14.3594C17.5369 15.3804 15.1697 16.0557 12.0227 16.3852C15.5385 16.5554 18.1447 17.1753 19.8411 18.245C20.6466 18.72 21.308 19.4007 21.7557 20.2155C22.2035 21.0304 22.4211 21.9494 22.3858 22.8761C22.3858 25.1613 21.5198 26.863 19.7879 27.9813C18.0559 29.0996 15.4429 29.652 11.9489 29.6385H10.9901C10.4738 29.6385 9.49031 29.5939 8.0766 29.5818C6.84728 29.5818 6.02774 29.5818 5.61797 29.5615L4.91726 29.5291H4.46241C4.24114 29.5291 3.80678 29.5291 3.17163 29.5655ZM10.4369 4.76891H7.67092C7.56335 4.85999 7.47529 4.97145 7.41196 5.0967C7.34862 5.22196 7.31128 5.35848 7.30213 5.49822C7.22901 6.29829 7.20438 7.10197 7.22837 7.90496C7.22837 9.20556 7.26525 10.0281 7.26525 10.336V16.2556H9.92057C12.1333 16.2556 13.7724 15.764 14.8378 14.7808C15.9032 13.7975 16.4318 12.2835 16.4236 10.2388C16.4236 8.31823 15.9688 6.92579 15.0591 6.06141C14.1494 5.19704 12.6087 4.76621 10.4369 4.76891ZM7.33901 26.6118C7.40867 27.6774 7.56028 28.3986 7.78156 28.7633C8.00284 29.128 8.53144 29.3103 9.36738 29.3103H11.1745C13.2643 29.3103 14.8132 28.7701 15.8213 27.6896C16.8293 26.6091 17.3333 24.9857 17.3333 22.8194C17.3333 20.6315 16.787 19.058 15.6942 18.0991C14.6015 17.1402 12.8368 16.6594 10.4 16.6567H7.26525V22.6411C7.26525 23.6379 7.27208 24.4482 7.28574 25.0722C7.29803 25.6799 7.31442 26.2026 7.33901 26.6118Z"
                  fill="white"
                />
                <path
                  d="M25.8525 29.602C25.1682 29.602 24.7092 29.6385 24.488 29.6385H24.0782C23.9307 29.6385 23.8569 29.5858 23.8569 29.4764C23.8569 29.367 23.9307 29.3103 24.0782 29.3103H25.1272C25.2647 29.313 25.4021 29.3008 25.537 29.2738C25.8558 28.9972 26.0589 28.6129 26.1066 28.1961C26.2614 27.2501 26.3422 26.2938 26.3483 25.3355C26.377 24.3915 26.3893 23.3542 26.4016 22.236C26.4139 21.1177 26.4016 19.9508 26.4016 18.7353V13.156C26.4016 11.9162 26.4016 10.9316 26.4016 10.2023C26.4016 9.47298 26.4016 8.84091 26.4016 8.34254C26.4254 7.35462 26.287 6.36941 25.9918 5.42529C25.7869 4.93908 25.287 4.69598 24.5003 4.69598H24.0454C23.8979 4.69598 23.8241 4.64331 23.8241 4.53391C23.8241 4.42451 23.8979 4.36779 24.0454 4.36779H24.9469C25.3567 4.36779 26.0041 4.36779 26.8851 4.40425C27.4957 4.42451 27.9095 4.44072 28.1144 4.44072H29.2208C29.5773 4.44072 30.2739 4.44072 31.3066 4.40425C32.5072 4.37994 33.3267 4.36779 33.7652 4.36779H34.5847C37.8629 4.36779 40.3215 4.8594 41.9606 5.84262C42.7365 6.2752 43.3766 6.91112 43.8104 7.68035C44.2442 8.44957 44.4549 9.32226 44.4192 10.2023C44.4192 11.823 43.6134 13.1601 42.0016 14.2135C40.3898 15.267 38.0678 15.972 35.0355 16.3285C37.4941 16.3528 39.2698 16.7783 40.3625 17.6048C41.4552 18.4314 42.4879 20.0359 43.4604 22.4183C43.8701 23.4393 44.2307 24.2861 44.5094 24.9547C44.788 25.6232 45.0462 26.1702 45.2675 26.6483C45.6221 27.426 46.1117 28.1363 46.714 28.7471C47.2574 29.1572 47.9333 29.3574 48.6153 29.3103H48.8366C49.0087 29.3103 49.0906 29.367 49.0783 29.4764C49.066 29.5858 48.9718 29.6385 48.7997 29.6385H47.4352C46.968 29.6385 46.4927 29.6385 46.0133 29.6385C45.5338 29.6385 44.9478 29.6749 44.2635 29.7276C43.9685 29.7519 43.7636 29.7641 43.653 29.7641H43.3784C42.9595 29.7775 42.5419 29.7101 42.1491 29.5655C41.8177 29.4239 41.5265 29.2041 41.3009 28.9254C40.92 28.4148 40.6099 27.8561 40.3789 27.2642C40.0593 26.5267 39.5921 25.2572 38.9775 23.4555C38.6333 22.3859 38.3095 21.4783 38.0022 20.7409C37.7412 20.0957 37.4387 19.4678 37.0966 18.8609C36.7101 18.1689 36.1587 17.5807 35.4903 17.147C34.7305 16.759 33.8869 16.5588 33.0317 16.5635H31.0525V22.1428C31.0525 22.6938 31.0525 23.1922 31.0525 23.6216C31.0525 24.4117 31.1017 25.1005 31.1263 25.6475C31.1508 26.1945 31.1672 26.6726 31.2 27.0494C31.2203 27.669 31.371 28.2775 31.6426 28.8362C31.8393 29.1523 32.3064 29.3103 33.044 29.3103H33.7816C33.9291 29.3103 34.0029 29.367 34.0029 29.4764C34.0029 29.5858 33.9291 29.6385 33.7816 29.6385C33.5603 29.6385 33.2284 29.6385 32.7858 29.6385C32.3433 29.6385 31.5852 29.6385 30.5731 29.6385C29.9215 29.6385 29.4667 29.602 29.2454 29.602H28.0161C27.635 29.5655 26.9015 29.5696 25.8525 29.602ZM32.1589 4.73244C31.9487 4.72375 31.7418 4.78542 31.5715 4.90748C31.4012 5.02954 31.2775 5.20485 31.2205 5.40503C31.0683 6.4989 31.0121 7.60375 31.0525 8.7072V16.1827C31.2984 16.1583 31.5934 16.1462 31.9376 16.1462H33.7816C34.5197 16.1767 35.256 16.0528 35.9423 15.7826C36.6287 15.5124 37.2496 15.1019 37.7646 14.5782C38.7726 13.5328 39.2766 12.1107 39.2766 10.3117C39.2766 8.43979 38.8218 7.03518 37.9121 6.09788C37.0024 5.16058 35.6501 4.69328 33.8553 4.69598H32.7285C32.538 4.69712 32.3479 4.70929 32.1589 4.73244Z"
                  fill="white"
                />
                <path
                  d="M63.8752 20.6153L59.339 20.7247C58.9292 20.7247 58.4785 20.7247 57.9376 20.7247C57.3967 20.7247 56.069 20.672 53.9546 20.5991L53.8071 20.9637C53.4444 21.9396 53.1487 22.9386 52.922 23.9539C52.7221 24.815 52.6231 25.6959 52.6269 26.5794C52.5927 27.3146 52.835 28.0363 53.3072 28.6053C53.5591 28.8563 53.8623 29.0512 54.1966 29.177C54.5309 29.3027 54.8884 29.3565 55.2454 29.3346C55.3683 29.3346 55.4953 29.3346 55.6306 29.3346C55.7658 29.3346 55.9789 29.3143 56.2043 29.2779C56.2985 29.2779 56.3682 29.2414 56.405 29.2414H56.4993C56.5657 29.2376 56.6312 29.2578 56.6837 29.2981C56.7055 29.3115 56.7236 29.3299 56.7365 29.3518C56.7493 29.3737 56.7565 29.3984 56.7574 29.4237C56.7566 29.461 56.7459 29.4974 56.7265 29.5294C56.7071 29.5614 56.6797 29.5878 56.6468 29.6061C56.5455 29.6614 56.4303 29.6867 56.3149 29.679H55.5773C55.2085 29.679 54.4955 29.6668 53.4383 29.6425C52.4303 29.6182 51.7459 29.6061 51.3894 29.6061H50.4019C50.2667 29.6061 50.0249 29.6061 49.6848 29.6425C49.1521 29.6749 48.7464 29.679 48.4842 29.679H47.8039C47.7738 29.6816 47.7434 29.6783 47.7146 29.6692C47.6858 29.6602 47.659 29.6456 47.6359 29.6263C47.5984 29.5792 47.5794 29.5201 47.5827 29.4602C47.5825 29.4368 47.5895 29.4138 47.6026 29.3943C47.6158 29.3749 47.6345 29.3597 47.6564 29.3508C47.702 29.3274 47.7526 29.3149 47.8039 29.3143H47.9146C48.3981 29.2984 48.8612 29.1181 49.2258 28.8038C49.712 28.3696 50.111 27.8486 50.4019 27.2682C50.8854 26.4214 51.3976 25.4206 51.9139 24.278C52.4303 23.1354 52.9834 21.7497 53.5735 20.1209L59.5234 4.55012C59.5644 4.46247 59.628 4.38702 59.7078 4.33132C59.7845 4.28188 59.8744 4.25646 59.966 4.25839H61.605C61.7187 4.25066 61.8325 4.27011 61.937 4.31512C62.0195 4.35855 62.0846 4.4286 62.1214 4.51365L68.5589 20.2101C69.0014 21.2905 69.4112 22.2508 69.7882 23.0909C70.1652 23.9309 70.4848 24.6602 70.747 25.2788C71.2257 26.3787 71.8132 27.4292 72.5009 28.4149C72.6769 28.6775 72.9146 28.8942 73.1935 29.0466C73.4724 29.199 73.7845 29.2825 74.1031 29.29H74.2875C74.3529 29.289 74.4171 29.3073 74.4719 29.3427C74.4937 29.3569 74.5118 29.3761 74.5247 29.3987C74.5375 29.4212 74.5447 29.4465 74.5456 29.4724C74.5453 29.4967 74.54 29.5206 74.5302 29.5429C74.5203 29.5652 74.5061 29.5853 74.4883 29.602C74.4661 29.6216 74.4402 29.6364 74.4119 29.6455C74.3837 29.6545 74.3539 29.6577 74.3243 29.6547C74.1031 29.6547 73.8449 29.6547 73.5499 29.6547C73.2548 29.6547 72.8041 29.6304 72.2222 29.598C71.8575 29.5777 71.5953 29.5615 71.4478 29.5615H70.5258C70.2061 29.5615 69.5751 29.5615 68.6449 29.598C67.1984 29.6304 66.1863 29.6425 65.5839 29.6547C64.9816 29.6668 64.5882 29.6547 64.3546 29.6547C64.2071 29.6547 64.1128 29.602 64.0801 29.4926C64.0473 29.3832 64.0801 29.3265 64.244 29.3265H65.0184C65.9035 29.3265 66.3789 29.051 66.4362 28.5161C66.4936 27.9813 66.26 26.9279 65.7191 25.3963C65.5225 24.8372 65.2766 24.1619 64.9816 23.3704C64.6865 22.579 64.3177 21.6606 63.8752 20.6153ZM63.6908 20.2506V20.2101L58.6383 7.97789L54.0652 20.2668L59.1177 20.2101L63.6908 20.2506Z"
                  fill="white"
                />
                <path
                  d="M76.7092 29.5655L75.5823 29.6223C75.3242 29.6223 75.0988 29.6223 74.9021 29.6223C74.7054 29.6223 74.6808 29.5696 74.6808 29.4602C74.6808 29.3508 74.7546 29.2941 74.9021 29.2941H75.0496C75.3883 29.3194 75.7272 29.2466 76.0248 29.0848C76.3224 28.9229 76.5659 28.6788 76.7256 28.3824C77.1552 27.4251 77.4118 26.4007 77.4837 25.3558C77.5615 24.7035 77.6107 23.9417 77.6476 23.0787C77.6845 22.2157 77.705 21.2473 77.705 20.1777V17.1875C77.705 16.0327 77.7295 14.2864 77.7418 11.9891C77.7418 10.5629 77.7418 9.55806 77.7418 9.01513V7.72263C77.748 7.31275 77.6984 6.90391 77.5943 6.5071C77.5192 6.20406 77.3668 5.92508 77.1518 5.69676C76.8826 5.37709 76.5491 5.1163 76.1724 4.93098C75.8035 4.75307 75.3986 4.66025 74.9882 4.65951H74.8775C74.7546 4.65951 74.6931 4.61089 74.6931 4.51365C74.6931 4.41641 74.7505 4.36779 74.8652 4.36779C76.0946 4.36779 77.2173 4.34753 78.2377 4.31511C79.258 4.2827 80.2373 4.20977 81.1716 4.11253C81.2624 4.09518 81.354 4.083 81.4462 4.07606H81.5445C81.6417 4.06891 81.7386 4.09463 81.8191 4.14899C81.8958 4.21883 81.9536 4.3066 81.9871 4.40425C82.11 4.67437 82.2944 5.02687 82.5403 5.46176C82.7861 5.89664 83.0812 6.43687 83.4254 7.08245L90.1005 18.3139L96.4028 7.61323C96.5503 7.37012 96.6979 7.11081 96.8454 6.83124L97.4723 5.64408C97.5707 5.47391 97.6362 5.35236 97.6731 5.27943L97.7674 5.0971C97.9214 4.83006 98.1276 4.59594 98.3738 4.4083C98.5729 4.26576 98.8124 4.18917 99.0582 4.18951H99.4433C99.6031 4.18951 99.8941 4.18951 100.312 4.22598C101.361 4.27865 102.217 4.31106 102.857 4.33537C103.496 4.35968 104.086 4.37184 104.664 4.37184C104.811 4.37184 104.885 4.42856 104.885 4.53796C104.885 4.64736 104.811 4.70003 104.664 4.70003H104.254C103.467 4.70003 102.967 4.93503 102.758 5.40908C102.549 5.88314 102.398 6.90012 102.373 8.38306C102.373 8.86116 102.373 9.46487 102.353 10.1699C102.332 10.8749 102.353 11.8716 102.353 13.1601V22.8194C102.353 23.3299 102.353 23.7999 102.353 24.2051C102.353 24.8979 102.402 25.5138 102.426 26.0122C102.451 26.5105 102.463 26.9522 102.5 27.3047C102.519 27.8621 102.677 28.4062 102.959 28.8889C103.168 29.1685 103.619 29.2941 104.307 29.2941H104.676C104.824 29.2941 104.897 29.3508 104.897 29.4602C104.897 29.5696 104.824 29.6223 104.676 29.6223C104.455 29.6223 104.098 29.6223 103.607 29.6223C103.115 29.6223 102.271 29.598 101.099 29.5655C100.365 29.5453 99.8695 29.5291 99.6236 29.5291H98.718C98.5091 29.5291 98.1198 29.5291 97.5584 29.5655L95.6775 29.6223C95.2678 29.6223 94.9891 29.6223 94.7924 29.6223C94.5957 29.6223 94.5712 29.5696 94.5712 29.4602C94.5712 29.3508 94.6449 29.2941 94.7924 29.2941H95.4563C96.2758 29.2941 96.788 29.1442 97.0216 28.8403C97.3301 28.336 97.5141 27.7668 97.5584 27.1791C97.6117 26.7982 97.6444 26.312 97.669 25.7407C97.6936 25.1694 97.669 24.4604 97.7059 23.6784C97.7059 23.2286 97.7428 22.7059 97.7428 22.1468V7.21211C97.7494 7.09475 97.737 6.97711 97.7059 6.86366C97.6939 6.83534 97.6732 6.81149 97.6467 6.79548C97.6203 6.77948 97.5893 6.77214 97.5584 6.77452C97.5092 6.77452 97.4396 6.8353 97.3535 6.95685C97.2675 7.0784 97.0912 7.36202 96.8208 7.79556L88.6254 21.5431C88.4674 21.851 88.2923 22.1499 88.1009 22.4385C88.0148 22.5479 87.937 22.6006 87.8632 22.6006H87.6911C87.6649 22.5997 87.6394 22.5926 87.6166 22.5799C87.5938 22.5672 87.5743 22.5493 87.56 22.5277C87.5231 22.4791 87.4329 22.3453 87.2854 22.1225L78.2213 6.83935L78.1844 20.2101C78.1598 23.2975 78.4671 25.5935 79.1064 27.098C79.7456 28.6026 80.8151 29.3508 82.3149 29.3427H82.8312C82.9541 29.3427 83.0156 29.3994 83.0156 29.5088C83.0156 29.6182 82.9541 29.6709 82.8312 29.6709H81.6511C81.1102 29.6709 80.2332 29.6506 79.0326 29.598C78.5409 29.5777 78.2131 29.5615 78.0533 29.5615H77.3894C77.2542 29.5291 77.037 29.5291 76.7092 29.5655Z"
                  fill="white"
                />
                <path
                  d="M129.152 26.2877C127.898 27.4795 126.419 28.4156 124.8 29.0429C123.168 29.6815 121.429 30.0087 119.674 30.0072C117.956 30.0462 116.249 29.7342 114.659 29.0907C113.069 28.4472 111.63 27.486 110.433 26.2674C109.208 25.0586 108.245 23.6158 107.601 22.0269C106.958 20.4381 106.649 18.7363 106.692 17.0254C106.681 14.43 107.461 11.8915 108.931 9.74117C110.401 7.59088 112.493 5.92869 114.933 4.9715C116.564 4.32607 118.306 3.99729 120.063 4.00313C121.789 3.96502 123.505 4.27518 125.106 4.91469C126.706 5.5542 128.158 6.50963 129.373 7.72263C131.892 10.2023 133.153 13.3086 133.155 17.0416C133.158 18.7709 132.805 20.4826 132.116 22.0723C131.428 23.662 130.419 25.0963 129.152 26.2877ZM112.077 17.0214C112.077 21.0731 112.728 24.197 114.031 26.393C115.334 28.5891 117.208 29.683 119.653 29.6749C122.21 29.6749 124.202 28.5567 125.628 26.3201C127.054 24.0835 127.767 20.984 127.767 17.0214C127.756 12.9345 127.1 9.79847 125.8 7.61323C124.5 5.42799 122.605 4.33402 120.116 4.33132C117.584 4.33132 115.61 5.46176 114.195 7.72263C112.78 9.9835 112.074 13.0831 112.077 17.0214Z"
                  fill="white"
                />
                <path
                  d="M154.304 7.32151C154.254 8.65453 154.222 9.82548 154.209 10.8222C154.197 11.8189 154.209 12.8481 154.209 13.8853V14.25C154.209 14.4445 154.148 14.5417 154.025 14.5417C153.902 14.5417 153.841 14.4445 153.841 14.25V13.8448C153.701 10.7115 152.96 8.34254 151.615 6.73805C150.271 5.13357 148.34 4.33132 145.821 4.33132C143.947 4.33132 142.502 4.7365 141.486 5.54684C140.981 5.94709 140.58 6.45972 140.314 7.04281C140.049 7.62591 139.926 8.2629 139.957 8.90168C139.948 9.67059 140.165 10.4255 140.584 11.0734C141.091 11.7992 141.744 12.4131 142.502 12.8764C142.976 13.1772 143.469 13.4479 143.977 13.6868C144.543 13.9542 145.563 14.3837 147.038 14.9631C148.653 15.5992 149.821 16.0895 150.521 16.442C151.157 16.7532 151.768 17.1121 152.349 17.5157C153.183 18.0697 153.877 18.8058 154.377 19.6671C154.827 20.4964 155.055 21.425 155.041 22.3656C155.056 23.4133 154.829 24.4505 154.378 25.3984C153.926 26.3463 153.262 27.1798 152.435 27.8355C150.7 29.2779 148.507 30.0004 145.854 30.0031C144.635 30.0115 143.415 29.9506 142.203 29.8208C140.558 29.5753 138.932 29.222 137.335 28.7633C137.228 28.7552 137.126 28.7173 137.04 28.6539C136.983 28.5814 136.957 28.4899 136.966 28.3986C137.04 25.7488 137.082 23.858 137.093 22.7262C137.093 21.5998 137.114 20.5464 137.114 19.574C137.114 19.3552 137.171 19.2458 137.298 19.2458C137.425 19.2458 137.482 19.3552 137.482 19.574C137.556 22.6614 138.343 25.1167 139.843 26.94C140.561 27.8324 141.482 28.545 142.53 29.0201C143.579 29.4952 144.726 29.7196 145.879 29.6749C147.596 29.6749 148.915 29.2698 149.825 28.4594C150.734 27.6491 151.189 26.4943 151.189 25.0114C151.201 24.228 150.989 23.4573 150.579 22.787C150.086 22.0483 149.423 21.4358 148.645 21.0002C148.191 20.7269 147.724 20.478 147.243 20.2547C146.702 19.9953 145.641 19.5496 144.072 18.9216C142.502 18.2936 141.433 17.8317 140.732 17.4792C140.097 17.168 139.488 16.8091 138.908 16.4055C138.113 15.8478 137.457 15.1174 136.991 14.2702C136.563 13.4418 136.347 12.5221 136.364 11.592C136.337 10.533 136.565 9.48275 137.029 8.52812C137.494 7.57349 138.182 6.74186 139.035 6.10193C140.806 4.70273 143.068 4.00313 145.821 4.00313C147.191 3.99906 148.559 4.07754 149.919 4.23813C151.273 4.40904 152.615 4.65933 153.939 4.9877C154.054 5.00761 154.162 5.05802 154.25 5.13357C154.302 5.20977 154.335 5.29741 154.345 5.38883C154.345 5.49822 154.345 5.68055 154.345 5.89935C154.345 6.11814 154.328 6.59219 154.304 7.32151Z"
                  fill="white"
                />
                <path
                  d="M171.342 20.6153L166.806 20.7247C166.396 20.7247 165.941 20.7247 165.404 20.7247C164.867 20.7247 163.536 20.672 161.421 20.5991L161.274 20.9637C160.911 21.9396 160.615 22.9386 160.389 23.9539C160.189 24.815 160.09 25.6959 160.094 26.5794C160.059 27.3146 160.302 28.0363 160.774 28.6053C161.026 28.8563 161.329 29.0512 161.663 29.177C161.998 29.3027 162.355 29.3565 162.712 29.3346C162.835 29.3346 162.962 29.3346 163.097 29.3346C163.289 29.3253 163.481 29.3063 163.671 29.2779C163.761 29.2779 163.835 29.2414 163.872 29.2414H163.966C164.032 29.2383 164.098 29.2584 164.15 29.2981C164.172 29.3115 164.19 29.3299 164.203 29.3518C164.216 29.3737 164.223 29.3984 164.224 29.4237C164.222 29.4608 164.212 29.4969 164.192 29.5288C164.173 29.5606 164.146 29.5872 164.113 29.6061C164.012 29.6614 163.897 29.6867 163.782 29.679H163.044C162.675 29.679 161.958 29.679 160.905 29.6425C159.852 29.6061 159.213 29.6061 158.856 29.6061H157.86C157.725 29.6061 157.483 29.6061 157.143 29.6425C156.606 29.6749 156.201 29.679 155.943 29.679H155.262C155.232 29.6839 155.201 29.6816 155.172 29.6724C155.143 29.6631 155.117 29.6471 155.095 29.6257C155.073 29.6044 155.057 29.5782 155.048 29.5494C155.038 29.5206 155.036 29.49 155.041 29.4602C155.041 29.4368 155.048 29.4138 155.061 29.3943C155.074 29.3749 155.093 29.3597 155.115 29.3508C155.16 29.3274 155.211 29.3149 155.262 29.3143H155.373C155.855 29.2992 156.318 29.1187 156.68 28.8038C157.172 28.3845 157.579 27.8773 157.881 27.3087C158.364 26.4619 158.877 25.4611 159.393 24.3185C159.909 23.176 160.462 21.7903 161.032 20.1615L166.99 4.55012C167.034 4.46098 167.102 4.38539 167.187 4.33132C167.263 4.28188 167.353 4.25646 167.445 4.25839H169.084C169.198 4.25066 169.311 4.27011 169.416 4.31512C169.498 4.35855 169.564 4.4286 169.6 4.51365L176.026 20.2101C176.468 21.2905 176.878 22.2508 177.255 23.0909C177.624 23.9012 177.939 24.6467 178.214 25.2788C178.693 26.3776 179.279 27.4279 179.963 28.4149C180.141 28.6773 180.379 28.8938 180.659 29.0462C180.938 29.1985 181.251 29.2821 181.57 29.29H181.754C181.82 29.289 181.884 29.3073 181.939 29.3427C181.96 29.3572 181.978 29.3764 181.991 29.3989C182.004 29.4214 182.011 29.4466 182.012 29.4724C182.011 29.5213 181.99 29.5677 181.955 29.602C181.933 29.6212 181.907 29.6357 181.878 29.6448C181.85 29.6538 181.821 29.6572 181.791 29.6547C181.57 29.6547 181.312 29.6547 181.017 29.6547C180.722 29.6547 180.271 29.6304 179.689 29.598C179.312 29.5291 179.07 29.5291 178.902 29.5291H177.98C177.661 29.5291 177.029 29.5291 176.099 29.5655C174.653 29.598 173.641 29.6101 173.038 29.6223C172.436 29.6344 172.043 29.6223 171.809 29.6223C171.751 29.6307 171.691 29.6192 171.641 29.5897C171.59 29.5602 171.551 29.5145 171.53 29.4602C171.493 29.3508 171.551 29.2941 171.698 29.2941H172.473C173.358 29.2941 173.829 29.0186 173.891 28.4837C173.952 27.9489 173.714 26.8955 173.174 25.3639C172.977 24.8048 172.731 24.1295 172.436 23.338C172.141 22.5466 171.776 21.639 171.342 20.6153ZM171.157 20.2506V20.2101L166.105 7.97789L161.532 20.2668L166.584 20.2101L171.157 20.2506Z"
                  fill="white"
                />
                <path
                  d="M181.832 12V4.92H179.048V3.6H186.176V4.92H183.392V12H181.832ZM187.347 12V3.6H188.631L192.303 9.732H191.631L195.243 3.6H196.527L196.539 12H195.063L195.051 5.916H195.363L192.291 11.04H191.595L188.475 5.916H188.835V12H187.347Z"
                  fill="white"
                />
              </svg>
            </motion.div>
          </div>

          {sections.map((section, index) => {
            return (
              <>
                <ProjectSection
                  key={section.title}
                  title={section.title}
                  description={section.description}
                  imgSrc={section.imgSrc}
                  imgAlt={section.imgAlt}
                />
                {index !== sections.length - 1 && (
                  <div className="divider"></div>
                )}
              </>
            );
          })}
        </div>
      </motion.main>
    </>
  );
}

export interface NeoDAXLogoProps {
    classNames?: string;
}

export const NeoDAXLogo: React.FC<NeoDAXLogoProps> = ({ classNames }) => {
    return (
        <svg
            className={classNames}
            width="110"
            height="40"
            viewBox="0 0 110 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_32184_54725)">
                <path
                    d="M91.0839 28.7334C90.8967 28.9957 91.0842 29.3598 91.4064 29.3598H94.5472C94.6762 29.3598 94.7972 29.297 94.8714 29.1913L107.188 11.6533C107.373 11.3907 107.185 11.0293 106.864 11.0293H103.926C103.798 11.0293 103.678 11.0911 103.603 11.1953L91.0839 28.7334Z"
                    fill="var(--primary-cta-color-60)"
                />
                <path
                    d="M60.3846 11H53.1511C52.9323 11 52.7549 11.1775 52.7549 11.3964V28.9636C52.7549 29.1825 52.9323 29.36 53.1511 29.36H60.2535C65.9168 29.36 69.9545 25.5306 69.9545 20.18C69.9545 14.8031 65.943 11 60.3846 11ZM60.4632 26.265H56.6645C56.4456 26.265 56.2682 26.0875 56.2682 25.8686V14.4914C56.2682 14.2724 56.4456 14.095 56.6645 14.095H60.3321C63.7668 14.095 66.3625 16.6129 66.3625 20.2062C66.3625 23.7733 63.8455 26.265 60.4632 26.265Z"
                    fill={"var(--text-color-100)"}
                />
                <path
                    d="M85.5284 29.1167C85.5901 29.2641 85.7342 29.36 85.8939 29.36H88.8025C89.0876 29.36 89.2793 29.0678 89.1661 28.8061L81.5648 11.2389C81.5021 11.0939 81.3592 11 81.2012 11H78.0759C77.9186 11 77.7762 11.0931 77.713 11.2372L70.0114 28.8044C69.8965 29.0663 70.0884 29.36 70.3743 29.36H73.1486C73.3083 29.36 73.4524 29.2641 73.5141 29.1167L74.9359 25.7214C74.9976 25.574 75.1417 25.4781 75.3014 25.4781H83.741C83.9007 25.4781 84.0448 25.574 84.1065 25.7214L85.5284 29.1167ZM76.8935 22.4619C76.61 22.4619 76.4182 22.1727 76.5284 21.9114L79.1794 15.6237C79.316 15.2996 79.7757 15.3009 79.9105 15.6258L82.5187 21.9135C82.627 22.1746 82.4352 22.4619 82.1527 22.4619H76.8935Z"
                    fill={"var(--text-color-100)"}
                />
                <path
                    d="M103.511 29.193C103.586 29.2978 103.706 29.36 103.834 29.36H107.08C107.403 29.36 107.59 28.9952 107.402 28.7329L94.8339 11.1657C94.7595 11.0617 94.6395 11 94.5117 11H91.3663C91.0445 11 90.8569 11.3634 91.0432 11.6259L103.511 29.193Z"
                    fill={"var(--text-color-100)"}
                />
                <path
                    d="M12.8888 11.3603C12.8888 11.1613 13.0501 11 13.249 11H15.9012C16.1001 11 16.2614 11.1613 16.2614 11.3603V28.947C16.2614 29.146 16.1001 29.3073 15.9012 29.3073H15.7946C15.545 29.3073 15.3044 29.159 15.133 29.0023L4.01204 18.8369C3.79803 18.574 3.37254 18.7254 3.37254 19.0644V28.947C3.37254 29.146 3.21127 29.3073 3.01234 29.3073H0.360202C0.161268 29.3073 0 29.146 0 28.947V11.3603C0 11.1613 0.161268 11 0.360202 11H0.435641C0.639227 11 0.786474 11.0576 0.914445 11.1812L12.2493 22.1308C12.4634 22.3937 12.8888 22.2423 12.8888 21.9033V11.3603Z"
                    fill={"var(--text-color-100)"}
                />
                <path
                    d="M32.9244 22.4028C32.9244 22.5776 32.9127 22.8108 32.8972 23.0399C32.8845 23.2269 32.728 23.3705 32.5407 23.3705H22.354C22.1278 23.3705 21.9567 23.5775 22.0212 23.7944C22.5555 25.5898 24.1823 26.7181 26.4408 26.7181C27.8639 26.7181 29.0072 26.3091 29.949 25.4716C30.1064 25.3316 30.3501 25.3375 30.4884 25.4964L31.7808 26.9824C31.8973 27.1163 31.8998 27.3161 31.7783 27.4455C30.5198 28.7866 28.6404 29.4904 26.3623 29.4904C21.6826 29.4904 18.6499 26.4828 18.6499 22.3244C18.6499 18.166 21.7088 15.1845 25.8656 15.1845C29.944 15.1845 32.9244 18.0352 32.9244 22.4028ZM25.8656 17.7999C23.894 17.7999 22.4209 18.9788 21.9739 20.7878C21.921 21.0022 22.0909 21.1998 22.3116 21.1998H29.4033C29.6207 21.1998 29.7897 21.0079 29.7419 20.7958C29.3382 19.0029 27.8628 17.7999 25.8656 17.7999Z"
                    fill={"var(--text-color-100)"}
                />
                <path
                    d="M42.6651 29.4904C38.3775 29.4904 35.2403 26.5089 35.2403 22.3244C35.2403 18.1399 38.3775 15.1845 42.6651 15.1845C47.0049 15.1845 50.1161 18.1399 50.1161 22.3244C50.1161 26.5089 47.0049 29.4904 42.6651 29.4904ZM42.6651 26.692C45.0442 26.692 46.8219 24.992 46.8219 22.3244C46.8219 19.6567 45.0442 17.9568 42.6651 17.9568C40.3122 17.9568 38.5344 19.6567 38.5344 22.3244C38.5344 24.992 40.3122 26.692 42.6651 26.692Z"
                    fill={"var(--text-color-100)"}
                />
                <path
                    d="M109.018 13.8142C109.3 14.3304 109.077 14.4628 108.843 14.4628H106.111C105.885 14.4628 105.545 14.3957 105.393 14.1385L103.752 11.676C103.502 11.2722 103.57 11.0273 103.966 11.0273H106.783C107.033 11.0273 107.24 11.1399 107.369 11.3517L109.018 13.8142Z"
                    fill={"var(--text-color-100)"}
                />
            </g>
            <defs>
                <clipPath id="clip0_32184_54725">
                    <rect width="109.201" height="40" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

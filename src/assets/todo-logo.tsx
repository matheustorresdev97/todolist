import type { ComponentProps } from 'react'
import Svg, { G, Path, ClipPath, Defs, Rect } from 'react-native-svg'
type TodoLogoProps = ComponentProps<typeof Svg>
export const TodoLogo = ({ ...props }: TodoLogoProps) => {
    return (
        <Svg width="111" height="32" viewBox="0 0 111 32" fill="none" {...props}>
            <G clip-path="url(#clip0_401_146)">
                <Path
                    d="M43.3982 6.44836V11.4861H30.6666V6.44836H43.3982ZM33.1324 1.8136H40.0769V19.5718C40.0769 19.8405 40.123 20.0672 40.2153 20.2519C40.3075 20.4282 40.4501 20.5625 40.643 20.6549C40.8359 20.7389 41.0833 20.7809 41.3853 20.7809C41.5949 20.7809 41.8382 20.7557 42.115 20.7053C42.4001 20.6549 42.6098 20.6129 42.744 20.5793L43.7504 25.466C43.4401 25.5583 42.9956 25.6717 42.4169 25.806C41.8466 25.9404 41.1672 26.0285 40.3788 26.0705C38.7853 26.1545 37.4475 25.9908 36.3656 25.5793C35.2837 25.1595 34.4701 24.5004 33.925 23.602C33.3798 22.7036 33.1156 21.5785 33.1324 20.2267V1.8136Z"
                    fill="#4EA8DE"
                />
                <Path
                    d="M55.3341 26.1461C53.2373 26.1461 51.4424 25.7305 49.9495 24.8992C48.4566 24.0596 47.3118 22.8925 46.515 21.398C45.7183 19.895 45.3199 18.1528 45.3199 16.1713C45.3199 14.1898 45.7183 12.4517 46.515 10.9572C47.3118 9.45424 48.4566 8.28715 49.9495 7.45591C51.4424 6.61629 53.2373 6.19647 55.3341 6.19647C57.4308 6.19647 59.2257 6.61629 60.7186 7.45591C62.2115 8.28715 63.3563 9.45424 64.1531 10.9572C64.9499 12.4517 65.3483 14.1898 65.3483 16.1713C65.3483 18.1528 64.9499 19.895 64.1531 21.398C63.3563 22.8925 62.2115 24.0596 60.7186 24.8992C59.2257 25.7305 57.4308 26.1461 55.3341 26.1461ZM55.3844 21.0076C55.9715 21.0076 56.4789 20.8102 56.9066 20.4156C57.3344 20.021 57.6657 19.4584 57.9005 18.728C58.1354 17.9975 58.2528 17.1285 58.2528 16.1209C58.2528 15.1049 58.1354 14.2359 57.9005 13.5139C57.6657 12.7834 57.3344 12.2208 56.9066 11.8262C56.4789 11.4316 55.9715 11.2343 55.3844 11.2343C54.7637 11.2343 54.2312 11.4316 53.7866 11.8262C53.3421 12.2208 53.0024 12.7834 52.7676 13.5139C52.5328 14.2359 52.4154 15.1049 52.4154 16.1209C52.4154 17.1285 52.5328 17.9975 52.7676 18.728C53.0024 19.4584 53.3421 20.021 53.7866 20.4156C54.2312 20.8102 54.7637 21.0076 55.3844 21.0076Z"
                    fill="#4EA8DE"
                />
                <Path
                    d="M75.1819 26.0453C73.8064 26.0453 72.54 25.6843 71.3825 24.9622C70.2335 24.2401 69.3109 23.1444 68.6148 21.6751C67.9271 20.2057 67.5832 18.3543 67.5832 16.1209C67.5832 13.7867 67.9438 11.8892 68.6651 10.4282C69.3948 8.96725 70.3342 7.89672 71.4832 7.21662C72.6406 6.53652 73.8567 6.19647 75.1316 6.19647C76.0877 6.19647 76.9264 6.3644 77.6477 6.70025C78.369 7.02771 78.9729 7.46851 79.4593 8.02267C79.9458 8.56843 80.3148 9.16877 80.5664 9.82368H80.6671V0H87.6116V25.7934H80.7174V22.6196H80.5664C80.298 23.2746 79.9122 23.8623 79.409 24.3829C78.9142 24.895 78.3103 25.3023 77.5974 25.6045C76.8929 25.8984 76.0877 26.0453 75.1819 26.0453ZM77.7484 20.7053C78.3858 20.7053 78.9309 20.5206 79.3838 20.1511C79.8451 19.7733 80.1974 19.2443 80.4406 18.5642C80.6922 17.8757 80.818 17.0613 80.818 16.1209C80.818 15.1637 80.6922 14.3451 80.4406 13.665C80.1974 12.9765 79.8451 12.4517 79.3838 12.0907C78.9309 11.7212 78.3858 11.5365 77.7484 11.5365C77.1109 11.5365 76.5658 11.7212 76.1129 12.0907C75.6684 12.4517 75.3245 12.9765 75.0813 13.665C74.8464 14.3451 74.729 15.1637 74.729 16.1209C74.729 17.0781 74.8464 17.9009 75.0813 18.5894C75.3245 19.2695 75.6684 19.7943 76.1129 20.1637C76.5658 20.5248 77.1109 20.7053 77.7484 20.7053Z"
                    fill="#5E60CE"
                />
                <Path
                    d="M100.331 26.1461C98.2338 26.1461 96.439 25.7305 94.9461 24.8992C93.4532 24.0596 92.3083 22.8925 91.5116 21.398C90.7148 19.895 90.3164 18.1528 90.3164 16.1713C90.3164 14.1898 90.7148 12.4517 91.5116 10.9572C92.3083 9.45424 93.4532 8.28715 94.9461 7.45592C96.439 6.61629 98.2338 6.19647 100.331 6.19647C102.427 6.19647 104.222 6.61629 105.715 7.45592C107.208 8.28715 108.353 9.45424 109.15 10.9572C109.946 12.4517 110.345 14.1898 110.345 16.1713C110.345 18.1528 109.946 19.895 109.15 21.398C108.353 22.8925 107.208 24.0596 105.715 24.8992C104.222 25.7305 102.427 26.1461 100.331 26.1461ZM100.381 21.0076C100.968 21.0076 101.475 20.8102 101.903 20.4156C102.331 20.021 102.662 19.4584 102.897 18.728C103.132 17.9975 103.249 17.1285 103.249 16.1209C103.249 15.105 103.132 14.2359 102.897 13.5139C102.662 12.7834 102.331 12.2208 101.903 11.8262C101.475 11.4316 100.968 11.2343 100.381 11.2343C99.7603 11.2343 99.2277 11.4316 98.7832 11.8262C98.3387 12.2208 97.999 12.7834 97.7642 13.5139C97.5293 14.2359 97.4119 15.105 97.4119 16.1209C97.4119 17.1285 97.5293 17.9975 97.7642 18.728C97.999 19.4584 98.3387 20.021 98.7832 20.4156C99.2277 20.8102 99.7603 21.0076 100.381 21.0076Z"
                    fill="#5E60CE"
                />
                <G clip-path="url(#clip1_401_146)">
                    <Path
                        d="M9.76148 2.68116C12.5298 6.19945 14.0076 10.5381 13.954 14.9901V16.0528L14.8674 16.6092C16.0475 17.3244 16.9276 18.4336 17.3474 19.7348C16.9789 19.4632 16.5933 19.2147 16.193 18.9909L13.7574 17.6219L13.3198 20.385C13.2818 20.6291 13.231 20.8712 13.1675 21.1101H6.34275C6.24126 20.7976 6.15881 20.485 6.08269 20.1599L5.53088 17.6594L3.28554 18.9097C2.91043 19.1197 2.54826 19.3514 2.20094 19.6036C2.62887 18.3174 3.49062 17.2144 4.64289 16.4779L5.51185 15.9215V14.9338C5.52752 10.4999 7.02309 6.19425 9.76783 2.68116H9.76148ZM9.76783 0.0805969C9.62548 0.080943 9.48806 0.13201 9.38092 0.224378L9.32383 0.274389C5.66633 4.30605 3.63537 9.51937 3.61537 14.9276C2.0633 15.92 0.914429 17.4185 0.369523 19.161C-0.175383 20.9036 -0.0816721 22.7795 0.634279 24.4609C1.3885 22.8192 2.6493 21.454 4.23696 20.56C4.39618 21.2398 4.60823 21.9065 4.87123 22.5542C4.90458 22.6787 4.97851 22.789 5.08165 22.868C5.18479 22.9471 5.31142 22.9906 5.44208 22.9918H14.2458C14.4234 22.9918 14.601 22.823 14.6898 22.5605C14.9465 21.9447 15.1254 21.3001 15.2226 20.6413C16.8133 21.5315 18.0751 22.8978 18.8253 24.5421C19.5844 22.869 19.7019 20.9813 19.1561 19.2293C18.6102 17.4772 17.4379 15.9799 15.8569 15.0151C15.9196 9.57499 13.8994 4.31151 10.1991 0.274389C10.144 0.21367 10.0766 0.165041 10.0012 0.131656C9.92581 0.0982718 9.84414 0.080876 9.76148 0.0805969L9.76783 0.0805969Z"
                        fill="#4EA8DE"
                    />
                    <Path
                        d="M9.76151 14.4087C9.27433 14.4087 8.79806 14.2665 8.39273 14.0001C7.9874 13.7337 7.67116 13.355 7.48387 12.9118C7.29658 12.4685 7.24662 11.9805 7.34029 11.5094C7.43396 11.0382 7.66707 10.6048 8.01023 10.264C8.35339 9.92318 8.79124 9.69011 9.2686 9.59417C9.74595 9.49823 10.2414 9.54372 10.6926 9.72491C11.1438 9.90609 11.5304 10.2149 11.8038 10.6123C12.0772 11.0097 12.2251 11.478 12.2288 11.9582C12.2364 12.2693 12.1817 12.5789 12.0679 12.8692C11.954 13.1595 11.7833 13.4249 11.5653 13.6501C11.3474 13.8754 11.0865 14.0561 10.7977 14.182C10.5089 14.3078 10.1977 14.3764 9.88202 14.3837C9.8421 14.39 9.80142 14.39 9.76151 14.3837V14.4087Z"
                        fill="#4EA8DE"
                    />
                    <Path
                        d="M13.1929 24.5484C13.0342 24.5434 12.8761 24.5697 12.7278 24.6257C12.5796 24.6817 12.4441 24.7664 12.3295 24.8747C12.2149 24.983 12.1234 25.1128 12.0604 25.2564C11.9973 25.4001 11.964 25.5547 11.9624 25.7111V29.3994C11.9624 29.7211 12.092 30.0296 12.3228 30.257C12.5536 30.4844 12.8665 30.6122 13.1929 30.6122C13.5192 30.6122 13.8322 30.4844 14.063 30.257C14.2937 30.0296 14.4234 29.7211 14.4234 29.3994V25.7612C14.4285 25.6053 14.402 25.4499 14.3455 25.3042C14.2891 25.1585 14.2037 25.0253 14.0945 24.9124C13.9853 24.7996 13.8544 24.7092 13.7094 24.6467C13.5644 24.5842 13.4082 24.5508 13.25 24.5484H13.1929Z"
                        fill="#5E60CE"
                    />
                    <Path
                        d="M6.34277 24.5484C6.18137 24.54 6.0199 24.5636 5.86797 24.618C5.71604 24.6723 5.57676 24.7562 5.4584 24.8647C5.34005 24.9732 5.24505 25.104 5.17905 25.2494C5.11305 25.3949 5.0774 25.5519 5.07422 25.7111V29.3994C5.07422 29.7211 5.20386 30.0295 5.43462 30.257C5.66538 30.4844 5.97836 30.6122 6.30471 30.6122C6.63106 30.6122 6.94404 30.4844 7.1748 30.257C7.40556 30.0295 7.5352 29.7211 7.5352 29.3994V25.7611C7.54027 25.6052 7.5138 25.4499 7.45734 25.3042C7.40088 25.1585 7.31555 25.0253 7.20634 24.9124C7.09712 24.7995 6.9662 24.7092 6.8212 24.6467C6.6762 24.5842 6.52003 24.5508 6.3618 24.5484H6.34277Z"
                        fill="#5E60CE"
                    />
                    <Path
                        d="M9.67269 24.5484C9.51442 24.545 9.35704 24.5725 9.20954 24.6291C9.06204 24.6858 8.9273 24.7705 8.81303 24.8785C8.69877 24.9865 8.6072 25.1156 8.54357 25.2584C8.47994 25.4013 8.4455 25.5551 8.4422 25.7111V30.7935C8.4422 31.1151 8.57184 31.4236 8.8026 31.651C9.03336 31.8785 9.34634 32.0062 9.67269 32.0062C9.99904 32.0062 10.312 31.8785 10.5428 31.651C10.7735 31.4236 10.9032 31.1151 10.9032 30.7935V25.7924C10.9083 25.6365 10.8818 25.4812 10.8253 25.3354C10.7689 25.1897 10.6835 25.0565 10.5743 24.9437C10.4651 24.8308 10.3342 24.7405 10.1892 24.678C10.0442 24.6155 9.88802 24.582 9.72978 24.5796L9.67269 24.5484Z"
                        fill="#5E60CE"
                    />
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0_401_146">
                    <Rect width="110.345" height="32" fill="white" />
                </ClipPath>
                <ClipPath id="clip1_401_146">
                    <Rect
                        width="19.4849"
                        height="31.9194"
                        fill="white"
                        transform="translate(0 0.0805969)"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}
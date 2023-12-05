import Wrapper from "src/components/Wrapper";
import { Button, Img, List, Text } from "src/components";
export default function Profile() {
  return (
    <Wrapper>
      <div className="flex flex-1 flex-col items-start justify-start p-[20px] md:px-2 w-full">
        <Text
          className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
          size="txtRalewayBold36"
        >
          Profile
        </Text>
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start mt-[21px] pb-[42px] rounded-[10px] w-full">
          <div className="bg-black-900 border border-black-900 border-solid  h-[85px] md:h-auto items-center flex justify-start max-w-[1035px] px-10 sm:px-5  w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto text-left"
              size="txtRalewaySemiBold28"
            >
              Basic Information
            </Text>
          </div>
          <div className="px-10 w-full flex flex-col items-center justify-start">
            <div className="bg-white-A700 border-2 border-black-900 border-dashed flex flex-col h-[140px] items-center justify-end mt-[35px] p-[7px] rounded-[50%] w-[140px]">
              <div className="flex flex-col h-[125px] items-center justify-start rounded-[62px] shadow-bs1 w-[125px]">
                <Img
                  className="h-[125px] md:h-auto rounded-[50%] w-[125px]"
                  src="images/img_africanamericanmale1280x800.png"
                  alt="user"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[914px] mt-8 w-full">
              <List
                className="flex flex-col gap-[30px] items-center w-full"
                orientation="vertical"
              >
                <div className="bg-gray-50 flex flex-1 flex-row gap-[6.17px] items-center justify-between px-10 sm:px-5 py-[30px] rounded-md w-full">
                  <div className="flex flex-row gap-5 items-center justify-center w-auto">
                    <Button
                      className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                      color="gray_100"
                      size="sm"
                    >
                      <Img
                        src="images/img_lock_black_900_51x51.svg"
                        alt="user_icon"
                      />
                    </Button>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                      size="txtRalewayMedium24"
                    >
                      First Name
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-700 text-right sm:text-xl w-auto"
                    size="txtRalewayMedium24"
                  >
                    John{" "}
                  </Text>
                </div>
                <div className="bg-gray-50 flex flex-1 flex-row gap-[6.17px] items-center justify-between px-10 sm:px-5 py-[30px] rounded-md w-full">
                  <div className="flex flex-row gap-5 items-center justify-center w-auto">
                    <Button
                      className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                      color="gray_100"
                      size="sm"
                    >
                      <Img
                        src="images/img_lock_black_900_51x51.svg"
                        alt="user_icon"
                      />
                    </Button>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                      size="txtRalewayMedium24"
                    >
                      Last Name
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-700 text-right sm:text-xl w-auto"
                    size="txtRalewayMedium24"
                  >
                    Doe
                  </Text>
                </div>
                <div className="bg-gray-50 flex flex-1 sm:flex-col flex-row gap-[6.17px] items-center justify-between px-10 sm:px-5 py-[30px] rounded-md w-full">
                  <div className="flex flex-row gap-5 items-center justify-center w-auto">
                    <Button
                      className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                      color="gray_100"
                      size="sm"
                    >
                      <Img
                        src="images/img_calendar_black_900.svg"
                        alt="calendar_icon"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                          size="txtRalewayMedium24"
                        >
                          Date of Birth
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                    size="txtRalewayMedium24"
                  >
                    1st January, 1990
                  </Text>
                </div>
              </List>
            </div>
            <div className="flex ml-auto">
              <Button
                className="cursor-pointer font-semibold mt-[38px] text-center text-xl w-[267px]"
                shape="round"
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start mt-[21px] pb-[42px] rounded-[10px] w-full">
          <div className="bg-black-900 border border-black-900 border-solid  h-[85px] md:h-auto items-center flex justify-start max-w-[1035px] px-10 sm:px-5  w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto text-left"
              size="txtRalewaySemiBold28"
            >
              Address Information
            </Text>
          </div>
          <div className="px-10 w-full flex flex-col items-center justify-start">
            <div className="flex flex-col items-start justify-start max-w-[914px] mt-8 w-full">
              <List
                className="flex flex-col gap-[30px] items-center w-full"
                orientation="vertical"
              >
                <div className="bg-gray-50 flex flex-1 flex-row gap-[6.17px] items-center justify-between px-10 sm:px-5 py-[30px] rounded-md w-full">
                  <div className="flex flex-row gap-5 items-center justify-center w-auto">
                    <Button
                      className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                      color="gray_100"
                      size="sm"
                    >
                      <Img src="images/img_linkedin.svg" alt="location" />
                    </Button>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                      size="txtRalewayMedium24"
                    >
                      Address
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-700 text-right sm:text-xl w-auto"
                    size="txtRalewayMedium24"
                  >
                    AM9HkKlSA2e6niifb4jnbTTrqq-x6A6J6g
                  </Text>
                </div>
              </List>
            </div>
            <div className="flex ml-auto">
              <Button
                className="cursor-pointer font-semibold mt-[38px] text-center text-xl w-[267px]"
                shape="round"
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
        {/* privacy */}
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start mt-[21px] pb-[42px] rounded-[10px] w-full">
          <div className="bg-black-900 border border-black-900 border-solid  h-[85px] md:h-auto items-center flex justify-start max-w-[1035px] px-10 sm:px-5  w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-auto text-left"
              size="txtRalewaySemiBold28"
            >
              Privacy
            </Text>
          </div>
          <div className="px-10 w-full flex flex-col items-center justify-start">
            <div className="flex flex-col items-start justify-start max-w-[914px] mt-8 w-full">
              <List
                className="flex flex-col gap-[30px] items-center w-full"
                orientation="vertical"
              >
                <div className="bg-gray-50 flex flex-1 flex-row gap-[6.17px] items-center justify-between px-10 sm:px-5 py-[30px] rounded-md w-full">
                  <div className="flex flex-row gap-5 items-center justify-center w-auto">
                    <Button
                      className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                      color="gray_100"
                      size="sm"
                    >
                      <Img src="images/img_contrast.svg" alt="privacy" />
                    </Button>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                      size="txtRalewayMedium24"
                    >
                      DID
                    </Text>
                  </div>
                  {/* <div className="bg-gray-50 flex md:flex-col flex-row gap-[6.17px] items-center justify-between max-w-[914px] px-10 sm:px-5 py-[30px] rounded-md w-full"> */}
                  <div className="flex md:flex-1 sm:flex-col flex-row gap-5 items-center justify-end w-[595px] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
                      size="txtRalewayMedium24"
                    >
                      AM9HkKlSA2e6niifb4jnbTTrqq-x6A6J6g
                    </Text>
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_thumbsup_blue_gray_400.svg"
                      alt="thumbsup"
                    />
                    {/* </div> */}
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

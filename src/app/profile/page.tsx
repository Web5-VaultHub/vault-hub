import Wrapper from "src/components/Wrapper";
import { Button, Img, Text } from "src/components";
import { ReactNode } from "react";

interface ProfileInfoProps {
  icon: string;
  label: string;
  value: string;
}

const Section: React.FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => (
  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start mt-[21px] pb-[42px] rounded-[10px] w-full">
    <div className="bg-black-900 border border-black-900 border-solid h-[85px]  md:h-auto items-center flex justify-start max-w-[1035px] px-10 sm:px-5 w-full">
      <Text
        className="sm:text-2xl md:text-[26px]  text-[28px] text-white-A700 w-auto text-left"
        size="txtRalewaySemiBold28"
      >
        {title}
      </Text>
    </div>
    <div className="p-10 w-full flex flex-col items-center justify-start">
      {children}
    </div>
  </div>
);

const ProfileInfo: React.FC<ProfileInfoProps> = ({ icon, label, value }) => (
  <div className="bg-gray-50 flex flex-1 flex-row gap-[6.17px] items-center justify-between px-10 sm:px-5 py-[30px] rounded-md w-full">
    <div className="flex flex-row gap-5  items-center justify-center w-auto">
      <Button
        className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
        color="gray_100"
        size="sm"
      >
        <Img src={icon} alt={`${label}_icon`} />
      </Button>
      <Text
        className="text-2xl md:text-[22px] text-gray-700 sm:text-xl w-auto"
        size="txtRalewayMedium24"
      >
        {label}
      </Text>
    </div>
    <Text
      className="text-2xl md:text-[22px] text-gray-700 text-right sm:text-xl w-auto"
      size="txtRalewayMedium24"
    >
      {value}
    </Text>
  </div>
);

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

        {/* Basic Information */}
        <Section title="Basic Information">
          <ProfileInfo
            icon="images/img_lock_black_900_51x51.svg"
            label="First Name"
            value="John"
          />
          <ProfileInfo
            icon="images/img_lock_black_900_51x51.svg"
            label="Last Name"
            value="Doe"
          />
          <ProfileInfo
            icon="images/img_calendar_black_900.svg"
            label="Date of Birth"
            value="1st January, 1990"
          />
          <div className="flex ml-auto">
            <Button
              className="cursor-pointer font-semibold mt-[38px] text-center text-xl w-[267px]"
              shape="round"
            >
              Edit Profile
            </Button>
          </div>
        </Section>

        {/* Address Information */}
        <Section title="Address Information">
          <ProfileInfo
            icon="images/img_linkedin.svg"
            label="Address"
            value="AM9HkKlSA2e6niifb4jnbTTrqq-x6A6J6g"
          />
          <div className="flex ml-auto mt-4">
            <Button
              className="cursor-pointer font-semibold text-center text-xl w-[267px]"
              shape="round"
            >
              Edit Address
            </Button>
          </div>
        </Section>

        {/* Privacy */}
        <Section title="Privacy">
          <ProfileInfo
            icon="images/img_contrast.svg"
            label="DID"
            value="AM9HkKlSA2e6niifb4jnbTTrqq-x6A6J6g"
          />
        </Section>
      </div>
    </Wrapper>
  );
}

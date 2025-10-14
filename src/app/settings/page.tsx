import Header from "@/components/Header";

const Settings = () => {
  const userSettings = {
    username: "mehdi",
    email: "mehdi@gmial.com",
    teamame: "Development Team",
    roleName: "Developer",
  };

  const lalbleStyles = "block text-sm font-medium dark:text-white";

  const textStyles =
    "mt-1 block w-full border border-gray-300 rounded-md sahdow-sm p-2 dark:text-white";

  return (
    <div className="p-8">
      <Header name="Settings" />

      <div className="space-y-4">
        <div>
          <label className={lalbleStyles}>Username</label>
          <div className={textStyles}>{userSettings.username}</div>
        </div>
        <div>
          <label className={lalbleStyles}>Email</label>
          <div className={textStyles}>{userSettings.email}</div>
        </div>
        <div>
          <label className={lalbleStyles}>Team</label>
          <div className={textStyles}>{userSettings.teamame}</div>
        </div>
        <div>
          <label className={lalbleStyles}>Role</label>
          <div className={textStyles}>{userSettings.roleName}</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

import { ApplicationContainer } from "../components/ApplicationContainer";
import { GroupContainer } from "../components/GroupContainer";

export const Home = () => {
  return (
    <main>
      <section>
        <ApplicationContainer />
        <hr className="my-4 mx-2" />
        <GroupContainer />
      </section>
    </main>
  );
};

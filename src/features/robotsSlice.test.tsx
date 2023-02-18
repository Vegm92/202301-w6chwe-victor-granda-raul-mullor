import { RobotsStructure, RobotStructure } from "../types";
import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";

describe("given a loadRobots reducer", () => {
  const robotVictor: RobotStructure = {
    name: "Victor",
    image: "url",
    speed: 10,
    endurance: 10,
    creationDate: "20/12/2020",
  };
  const robotRaul: RobotStructure = {
    name: "Raul",
    image: "url",
    speed: 3,
    endurance: 3,
    creationDate: "10/12/2020",
  };

  const robots: RobotsStructure = [robotVictor, robotRaul];
  describe("when it receives a list of robots", () => {
    test("then it should return a list of 2 robots", () => {
      const loadRobotsAction = loadRobotsActionCreator(robots);
      const expectedRobotsToLoad: RobotsStructure = robots;

      const newRobots = robotsReducer([], loadRobotsAction);

      expect(newRobots).toStrictEqual(expectedRobotsToLoad);
    });
  });
});

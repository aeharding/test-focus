import { IonButton, useIonActionSheet } from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [present] = useIonActionSheet();

  return (
    <>
      <IonButton
        onClick={() => {
          present({
            buttons: [
              {
                text: "Focus",
                handler: () => {
                  setTimeout(() => {
                    document.querySelector("input")?.focus();
                  });
                },
              },
            ],
          });
        }}
      >
        Open action sheet
      </IonButton>
      <input type="text" />
    </>
  );
};

export default ExploreContainer;

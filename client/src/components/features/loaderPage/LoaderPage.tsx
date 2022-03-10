import React, { FC } from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
export const LoaderPage: FC = () => {
	return (
		<div>
			<Segment>
				<Dimmer active>
					<Loader active inline="centered" />
				</Dimmer>

				<Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
			</Segment>
		</div>
	);
};

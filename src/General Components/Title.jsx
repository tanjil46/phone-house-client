

const Title = ({heading,subHeading}) => {
    return (
        <div className="space-y-6">
            <p className="text-2xl text-center text-yellow-600">---{heading}---</p>
            <p className="text-2xl text-center">...{subHeading}...</p>
        </div>
    );
};

export default Title;
const { rive: riveInstance, RiveComponent }: RiveState = useRive({
    src: './src/assets/NgWt.riv', // the animation file
    stateMachines: 1, // the name of the state machine to be used
    autoplay: true,
    layout: new Layout({
        fit: Fit.Cover,
        alignment: Alignment.Center,
    }),
    ...riveProps,
});

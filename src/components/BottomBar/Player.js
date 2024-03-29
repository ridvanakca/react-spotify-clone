import CustomRange from "components/CustomRange";
import { Icon } from "Icons";
import React, { useMemo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAudio, useFullscreen, useToggle } from "react-use";
import { secondsToTime } from "utils";
import { setControls, setPlaying, setSidebar } from "stores/player";
import FullScreenPlayer from "components/FullScreenPlayer";

function Player() {
  const fsRef = useRef();
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(fsRef, show, { onClose: () => toggle(false) });

  const dispatch = useDispatch();
  const { current, sidebar } = useSelector((state) => state.player);

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return "volumeMuted";
    if (state.volume > 0 && state.volume < 0.33) return "volumeLow";
    if (state.volume >= 0.33 && state.volume < 0.66) return "volumeNormal";
    return "volumeFull";
  }, [state.volume, state.muted]);

  return (
    <div className='flex px-4 justify-between items-center h-full'>
      <div className='min-w-[11.25rem] w-[30%]'>
        {current && (
          <div className='flex items-center'>
            <div className='flex items-center mr-3'>
              {!sidebar && (
                <div className='h-14 w-14 mr-3 flex-shrink-0 relative group'>
                  <img className='' src={current.image} alt='' />
                  <button onClick={() => dispatch(setSidebar(true))} className='w-6 h-6 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] rotate-90 rounded-full absolute top-1 right-1 flex items-center justify-center'>
                    <Icon name='arrowLeft' size={16} />
                  </button>
                </div>
              )}
              <div>
                <h6 className='text-sm line-clamp-1'>{current.title}</h6>
                <p className='text-[0.688rem] text-white text-opacity-70'>{current.artist}</p>
              </div>
            </div>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
              <Icon name='heart' size={16} />
            </button>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
              <Icon name='pictureInPicture' size={16} />
            </button>
          </div>
        )}
      </div>
      <div className='max-w-[45.125rem] w-[40%] pt-2 flex flex-col px-4 items-center'>
        <div className='flex items-center gap-x-2'>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name='shuffle' size={16} />
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name='playerPrev' size={16} />
          </button>
          <button onClick={controls[state?.playing ? "pause" : "play"]} className='w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]'>
            <Icon name={state?.playing ? "pause" : "play"} size={16} />
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name='playerNext' size={16} />
          </button>
          <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
            <Icon name='repeat' size={16} />
          </button>
        </div>
        <div className='w-full flex items-center mt-2 gap-x-2'>
          {audio}
          <div className='text-[0.688rem] text-white text-opacity-70'>{secondsToTime(state?.time)}</div>
          <CustomRange onChange={(value) => controls.seek(value)} step={0.1} min={0} max={state?.duration || 1} value={state?.time} />
          <div className='text-[0.688rem] text-white text-opacity-70'>{secondsToTime(state?.duration)}</div>
        </div>
      </div>
      <div className='min-w-[11.25rem] w-[30%] flex items-center justify-end'>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name='lyrics' size={16} />
        </button>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name='queue' size={16} />
        </button>
        <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name='device' size={16} />
        </button>
        <button onClick={controls[state.muted ? "unmute" : "mute"]} className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name={volumeIcon} size={16} />
        </button>
        <div className='w-[5.813rem] max-w-full'>
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={(value) => {
              controls.unmute();
              controls.volume(value);
            }}
          />
        </div>
        <button onClick={toggle} className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
          <Icon name='fullScreen' size={16} />
        </button>
      </div>
      <div ref={fsRef}>{isFullscreen && (
        <FullScreenPlayer 
          toggle={toggle}
          state={state}
          controls={controls}
          volumeIcon={volumeIcon}
        />
      )}</div>
    </div>
  );
}

export default Player;

import { useSelector, useDispatch } from "react-redux";
import { setInfoTooltip } from "../../store/features/tooltipSlice";
import type { RootState } from '../../../types';

export default function InfoTooltip () {
  const dispatch = useDispatch();
  const infoTooltipOpen = useSelector((state: RootState) => state.tooltip.infoTooltipOpen)
  const infoTooltipMessage = useSelector((state: RootState) => state.tooltip.infoTooltipMessage)

  function closeInfoTooltip() {
    dispatch(setInfoTooltip({isOpen: false, message: ''}));
  }

  return (
    <div className={`info-tooltip ${infoTooltipOpen ? 'info-tooltip_opened' : ''}`} aria-label={`Уведомление ${infoTooltipMessage}`} >
      <div className="info-tooltip__container">
        <button className="info-tooltip__close" type="button" onClick={closeInfoTooltip} aria-label="Закрыть уведомление" />
        <div className="info-tooltip__image_type_err" />
        <h3 className="info-tooltip__title">
          {infoTooltipMessage}
        </h3>
      </div>
    </div>
  )
}


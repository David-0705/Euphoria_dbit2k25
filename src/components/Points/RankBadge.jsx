import { Trophy, Medal, Award } from "lucide-react";

export function RankBadge({ rank, size = "md" }) {
  const getRankStyle = () => {
    switch (rank) {
      case 1:
        return {
          icon: Trophy,
          iconColor: "hsl(45, 30%, 10%)"
        };
      case 2:
        return {
          icon: Medal,
          iconColor: "hsl(210, 15%, 15%)"
        };
      case 3:
        return {
          icon: Award,
          iconColor: "hsl(25, 30%, 15%)"
        };
      default:
        return {
          icon: null,
          iconColor: "hsl(210, 20%, 98%)"
        };
    }
  };

  const getBadgeClass = () => {
    let badgeClass = "rank-badge ";
    
    // Add size class
    badgeClass +=
      size === "lg"
        ? "rank-badge-lg "
        : size === "sm"
        ? "rank-badge-sm "
        : "rank-badge-md ";
    
    if (rank === 1) badgeClass += "rank-badge-gold";
    else if (rank === 2) badgeClass += "rank-badge-silver";
    else if (rank === 3) badgeClass += "rank-badge-bronze";
    else badgeClass += "rank-badge-default";
    
    return badgeClass;
  };

  const { icon: Icon, iconColor } = getRankStyle();

  return (
    <div className={getBadgeClass()}>
      {Icon && rank <= 3 ? (
        <Icon
          size={size === "lg" ? 24 : size === "sm" ? 12 : 16}
          color={iconColor}
        />
      ) : (
        <span>{rank}</span>
      )}
    </div>
  );
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Covalition.Cypis.DomainModel
{
    [Table("Tasks")]
    public class Task: AuditableEntity
    {
        public string Title { get; set;  }

        public double? EstimateOptymistic { get; set; } 

        public double? EstimatePessimistic { get; set; } 

        // w UI musi być mozliwość wpisania jednej liczby dla obu pól naraz: EstimateOptymistic, EstimatePessimistic
        public double? Estimate => (EstimateOptymistic ?? 0 + EstimatePessimistic ?? 0) / 2;

        public override string ToString() => $"({Id}) {Title}";

    }
}

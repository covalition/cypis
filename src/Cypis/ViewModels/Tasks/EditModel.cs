﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Covalition.Cypis.ViewModels.Tasks
{
    public class EditModel
    {
        public int Id { get; set; }

        [Display(Name = "Task Title")]
        public string Title { get; set; }
    }
}
